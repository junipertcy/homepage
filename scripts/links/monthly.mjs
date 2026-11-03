// The monthly check of outgoing links. It never fails a build: it writes a Markdown report,
// and the links.yml workflow turns that into one rolling GitHub issue.
//
// Two steps, with lychee in between:
//
//   node scripts/links/monthly.mjs urls [dist/browser] > links.txt
//       Every external URL in the built pages and in the source (src/index.html and
//       src/app/**/*.{html,ts}, which includes News years the built pages do not show),
//       one per line. The original URLs of retired links are left out; their archived
//       copies are in.
//
//   lychee --suggest --format json --output lychee.json links.txt
//
//   node scripts/links/monthly.mjs report lychee.json [dist/browser] > report.md
//       The report. Besides lychee's failures, it checks what lychee cannot:
//       - Filen public links, through Filen's link-status API;
//       - DOIs, which must redirect at doi.org (publishers often refuse automated requests
//         to their landing pages, so .lycheeignore skips doi.org);
//       - redirects to a different domain, which can mean the domain was taken over.
//       Each problem lists where it appears in the source. When GITHUB_OUTPUT is set, the
//       number of problems is written there as `problems`.
//
// Run with --disable-warning=MODULE_TYPELESS_PACKAGE_JSON (it imports src/app/links/links.ts).
// Node built-ins only.

import { execFileSync } from 'node:child_process';
import { appendFileSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const SITE_HOSTS = new Set(['junipertcy.info', 'www.junipertcy.info']);

// Redirects between these registered domains, in either direction, are expected, so they are
// not reported as possible takeovers. '*' allows any destination.
const REDIRECTS_ALLOWED = [
  ['twitter.com', 'x.com'],
  ['doi.org', '*'],
  ['traumasolutions.com', 'dianepooleheller.com'],
  ['mozillafoundation.org', 'mozilla.org'],
];

// Suffixes under which the registered domain has three labels (cs.ntu.edu.tw → ntu.edu.tw).
const TWO_LABEL_SUFFIXES = new Set(['com.tw', 'edu.tw', 'org.tw', 'ac.uk', 'co.uk', 'ac.jp']);

// Sent with every request this script makes. It says what it is, as lychee's does.
const USER_AGENT = 'junipertcy.info monthly link check (+https://github.com/junipertcy/homepage)';

const root = resolve(import.meta.dirname, '../..');
const { LINKS } = await import(pathToFileURL(join(root, 'src/app/links/links.ts')).href);
const retired = Object.values(LINKS).filter(entry => entry.retired);
const retiredUrls = new Set(retired.map(entry => entry.url));
const archiveOf = new Map(retired.filter(e => e.retired.archive).map(e => [e.retired.archive, e.url]));

const files = (dir, test) => readdirSync(dir, { recursive: true })
  .filter(test)
  .map(f => join(dir, f));

// --- Collecting URLs ---------------------------------------------------------------------

// Every URL a built page references: href and src values, and each candidate in a srcset.
// The same reading as check-built.mjs, minus preconnect hints, which name an origin only.
const builtReferences = html => {
  const markup = html.replace(/<script\b([^>]*)>[\s\S]*?<\/script>/gi, '<script$1></script>');
  const urls = [];
  for (const [tag] of markup.matchAll(/<[a-z][^>]*>/gi)) {
    if (/^<base\b/i.test(tag) || /^<link\b[^>]*\brel="(preconnect|dns-prefetch)"/i.test(tag)) {
      continue;
    }
    for (const [, name, value] of tag.matchAll(/\s(href|src|srcset)\s*=\s*"([^"]*)"/gi)) {
      if (name.toLowerCase() === 'srcset') {
        urls.push(...value.split(',').map(c => c.trim().split(/\s+/)[0]).filter(Boolean));
      } else {
        urls.push(value);
      }
    }
  }
  return urls;
};

// URLs written in a source file, outside comments. A quoted URL followed by `+` is the
// start of a URL built in code (`'https://arxiv.org/abs/' + id`) and is skipped; the built
// pages have the whole URL.
const sourceUrls = (text, path) => {
  let code = text;
  if (path.endsWith('.html')) {
    code = code
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/<link\b[^>]*\brel="(preconnect|dns-prefetch)"[^>]*>/gi, '')
      .replace(/\sxmlns(:\w+)?="[^"]*"/g, '');
  } else {
    code = code.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|\s)\/\/.*$/gm, '$1');
  }
  const urls = [];
  for (const m of code.matchAll(/https?:\/\/[^\s'"<>`]+/g)) {
    const rest = code.slice(m.index + m[0].length);
    if (/^['"`]\s*\+/.test(rest) || /\{\{|\$\{/.test(m[0])) {
      continue;
    }
    let url = m[0].replaceAll('&amp;', '&').replace(/[.,;:!?]+$/, '');
    while (url.endsWith(')') && url.split('(').length < url.split(')').length) {
      url = url.slice(0, -1);
    }
    urls.push(url);
  }
  return urls;
};

const external = ref => {
  let url;
  try {
    url = new URL(ref.replaceAll('&amp;', '&'), 'https://junipertcy.info/');
  } catch {
    return undefined;
  }
  if (!/^https?:$/.test(url.protocol) || SITE_HOSTS.has(url.hostname)) {
    return undefined;
  }
  return url.href;
};

// Map of URL → the places it was found (built page names).
const collect = dist => {
  const found = new Map();
  const add = (url, where) => {
    if (url && !retiredUrls.has(url)) {
      found.set(url, [...(found.get(url) ?? []), where]);
    }
  };
  for (const page of files(dist, f => f.endsWith('.html'))) {
    for (const ref of builtReferences(readFileSync(page, 'utf8'))) {
      add(external(ref), relative(dist, page));
    }
  }
  const sources = [join(root, 'src/index.html'),
    ...files(join(root, 'src/app'), f => /\.(html|ts)$/.test(f))];
  for (const path of sources) {
    for (const url of sourceUrls(readFileSync(path, 'utf8'), path)) {
      add(external(url), relative(root, path));
    }
  }
  // A URL can be written with or without a trailing slash; links.ts uses one spelling.
  for (const url of [...found.keys()]) {
    if (retiredUrls.has(url.replace(/\/$/, '')) || retiredUrls.has(url + '/')) {
      found.delete(url);
    }
  }
  return found;
};

// --- Checks lychee cannot do -------------------------------------------------------------

const registered = host => {
  const labels = host.replace(/\.$/, '').split('.');
  const n = TWO_LABEL_SUFFIXES.has(labels.slice(-2).join('.')) ? 3 : 2;
  return labels.slice(-n).join('.');
};

const allowed = (from, to) => REDIRECTS_ALLOWED.some(([a, b]) =>
  (a === from && (b === '*' || b === to)) || (a === to && b === from));

const request = async (url, options = {}) => {
  const res = await fetch(url, {
    redirect: 'manual',
    signal: AbortSignal.timeout(20000),
    headers: { 'user-agent': USER_AGENT, accept: 'text/html,*/*;q=0.8' },
    ...options,
  });
  await res.body?.cancel();
  return res;
};

// Follow redirects one hop at a time. Returns the final URL, or undefined if a request fails
// (lychee reports failures; this check is only about where a working link ends up).
const finalUrl = async url => {
  let current = url;
  for (let hop = 0; hop < 10; hop++) {
    let res;
    try {
      res = await request(current);
    } catch {
      return undefined;
    }
    const location = res.headers.get('location');
    if (res.status < 300 || res.status >= 400 || !location) {
      return current;
    }
    current = new URL(location, current).href;
  }
  return current;
};

// Run `task` over `items`, one request at a time per host, a few hosts at once.
const perHost = async (items, task, hosts = 6) => {
  const groups = Map.groupBy(items, item => new URL(item).hostname);
  const queue = [...groups.values()];
  const results = new Map();
  const worker = async () => {
    for (let group = queue.shift(); group; group = queue.shift()) {
      for (const item of group) {
        results.set(item, await task(item));
      }
    }
  };
  await Promise.all(Array.from({ length: hosts }, worker));
  return results;
};

const takeovers = async urls => {
  const candidates = urls.filter(u => !/^https?:\/\/(dx\.)?doi\.org\//.test(u));
  const ends = await perHost(candidates, finalUrl);
  const flagged = [];
  for (const [url, end] of ends) {
    if (!end) {
      continue;
    }
    const from = new URL(url).hostname;
    const to = new URL(end).hostname;
    const crossed = registered(from) !== registered(to);
    // A redirect to another subdomain of the same domain is a takeover only when the
    // domain itself was retired as one (networks2021.net → 1xbet.networks2021.net).
    if ((crossed && !allowed(registered(from), registered(to))) || (!crossed && from !== to &&
        retired.some(e => e.retired.reason === 'domain-taken-over' &&
          registered(new URL(e.url).hostname) === registered(from)))) {
      flagged.push({ url, detail: `now ends at ${end}` });
    }
  }
  return flagged;
};

const filenLinks = async urls => {
  const problems = [];
  for (const url of urls) {
    const uuid = url.match(/^https:\/\/(?:app\.)?filen\.io\/d\/([0-9a-f-]{36})/)?.[1];
    if (!uuid) {
      continue;
    }
    let code;
    try {
      const res = await fetch('https://gateway.filen.io/v3/file/link/password', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ uuid }),
        signal: AbortSignal.timeout(20000),
      });
      code = (await res.json()).code;
    } catch (error) {
      code = `request failed (${error.cause?.code ?? error.name})`;
    }
    if (code === 'public_link_not_found') {
      problems.push({ url, detail: 'Filen reports the public link as not found', kind: 'filen' });
    } else if (code !== 'info_fetched') {
      problems.push({ url, detail: `unverified: Filen answered ${code}`, kind: 'unverified' });
    }
  }
  return problems;
};

const dois = async urls => {
  const problems = [];
  const results = await perHost(urls.filter(u => /^https?:\/\/(dx\.)?doi\.org\/10\./.test(u)), async url => {
    try {
      return (await request(url)).status;
    } catch (error) {
      return `request failed (${error.cause?.code ?? error.name})`;
    }
  });
  for (const [url, status] of results) {
    if (typeof status !== 'number') {
      problems.push({ url, detail: `unverified: ${status}`, kind: 'unverified' });
    } else if (status < 300 || status >= 400) {
      problems.push({ url, detail: `doi.org answered ${status} instead of redirecting`, kind: 'doi' });
    }
  }
  return problems;
};

// --- Report ------------------------------------------------------------------------------

const locations = (url, builtIn) => {
  const spellings = [...new Set([url, url.replaceAll('&', '&amp;'), url.replace(/\/$/, '')])];
  const hits = new Set();
  for (const s of spellings) {
    try {
      const out = execFileSync('git', ['grep', '-n', '-I', '-F', '-e', s, '--', 'src'], { cwd: root, encoding: 'utf8' });
      for (const line of out.trim().split('\n')) {
        hits.add(line.split(':').slice(0, 2).join(':'));
      }
    } catch {
      // git grep exits 1 when nothing matches.
    }
  }
  return hits.size > 0 ? [...hits] : [...new Set(builtIn)].map(p => `built page ${p}`);
};

const lycheeProblems = path => {
  const data = JSON.parse(readFileSync(path, 'utf8'));
  const suggestions = new Map(Object.values(data.suggestion_map ?? {}).flat()
    .map(s => [s.original, s.suggestion]));
  const problems = [];
  for (const [map, kind] of [[data.error_map, 'broken'], [data.timeout_map, 'broken']]) {
    for (const entry of Object.values(map ?? {}).flat()) {
      const status = entry.status?.code ? `${entry.status.code}` : (entry.status?.details ?? entry.status?.text ?? 'failed');
      problems.push({ url: entry.url, detail: status, archive: suggestions.get(entry.url), kind });
    }
  }
  return { problems, total: data.total ?? 0 };
};

const cell = text => String(text).replaceAll('|', '\\|').replaceAll('\n', ' ');

const table = (rows, found) => [
  '| Link | Problem | Where |',
  '| --- | --- | --- |',
  ...rows.map(p => {
    const archived = archiveOf.has(p.url) ? ` (archived copy of retired ${archiveOf.get(p.url)})` : '';
    const wayback = p.archive ? `<br>Wayback: ${p.archive}` : '';
    return `| ${cell(p.url)}${cell(archived)} | ${cell(p.detail)}${wayback} | ` +
      `${locations(p.url, found.get(p.url) ?? []).map(l => '`' + l + '`').join('<br>')} |`;
  }),
];

const report = async (lycheeJson, dist) => {
  const found = collect(dist);
  const urls = [...found.keys()];
  const lychee = lycheeProblems(lycheeJson);
  const [moved, filen, doi] = await Promise.all([takeovers(urls), filenLinks(urls), dois(urls)]);
  const sections = [
    ['Broken links', 'Reported by lychee: not found, missing domain, certificate failure, timeout or server error.',
      lychee.problems],
    ['Possible takeovers', 'These links now redirect to a different domain than the one linked.', moved],
    ['Filen links not found', '', filen.filter(p => p.kind === 'filen')],
    ['DOIs that do not resolve', '', doi.filter(p => p.kind === 'doi')],
    ['Unverified', 'A check could not get a clear answer; this is not a finding that the link is dead.',
      [...filen, ...doi].filter(p => p.kind === 'unverified')],
  ];

  const problems = sections.reduce((n, [, , rows]) => n + rows.length, 0);
  const lines = [
    `Monthly link check, ${new Date().toISOString().slice(0, 10)}: ` +
      (problems === 0 ? 'no problems found.' : `${problems} problem(s).`),
    '',
    `${urls.length} external links checked (${lychee.total} by lychee), plus Filen and DOI status. ` +
      `${retiredUrls.size} retired links are not checked; their archived copies are.`,
  ];
  for (const [title, note, rows] of sections) {
    if (rows.length > 0) {
      lines.push('', `## ${title}`, '', ...(note ? [note, ''] : []), ...table(rows, found));
    }
  }
  if (process.env.GITHUB_OUTPUT) {
    appendFileSync(process.env.GITHUB_OUTPUT, `problems=${problems}\n`);
  }
  return lines.join('\n') + '\n';
};

// --- Main --------------------------------------------------------------------------------

const [command, ...args] = process.argv.slice(2);
if (command === 'urls') {
  const dist = resolve(args[0] ?? join(root, 'dist/browser'));
  process.stdout.write([...collect(dist).keys()].sort().join('\n') + '\n');
} else if (command === 'report' && args[0]) {
  const dist = resolve(args[1] ?? join(root, 'dist/browser'));
  process.stdout.write(await report(resolve(args[0]), dist));
} else {
  console.error('usage: monthly.mjs urls [dist/browser] | monthly.mjs report lychee.json [dist/browser]');
  process.exit(2);
}
