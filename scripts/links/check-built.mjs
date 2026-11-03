// Check the built site's links, offline. Run after the production build; fails on:
//
// 1. A link to this site whose target is not in the build. Every href, src and srcset on
//    every built page is resolved as the browser does (the pages use <base href="/">); the
//    target must be a built file, or a folder with an index.html (a prerendered page).
// 2. A link to a domain taken over by an unrelated party: every entry in
//    src/app/links/links.ts retired with reason 'domain-taken-over', and its subdomains
//    (networks2021.net also covers 1xbet.networks2021.net). Archived copies are fine:
//    their host is web.archive.org.
//
// Usage:
//   node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON scripts/links/check-built.mjs [dist/browser]
// Node built-ins only; no network.
//
// Why not lychee: lychee 0.24.2 stops reading a page at Angular's inline event-replay script
// (its `o<n.length` looks like a tag), which hides almost every link on a prerendered page,
// and it does not honor <base href>.

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const SITE = 'https://junipertcy.info/';

// Linked but gitignored, so absent from a fresh checkout and from CI. Remove each entry once
// its link points elsewhere (task 6.5 of openspec/changes/preserve-outgoing-links).
const ABSENT_IN_CHECKOUT = new Set([
  '/assets/pdf/posters/Industry_poster-2016-NetSci.pdf',
]);

const root = resolve(import.meta.dirname, '../..');
const dist = resolve(process.argv[2] ?? join(root, 'dist/browser'));
const { LINKS } = await import(pathToFileURL(join(root, 'src/app/links/links.ts')).href);

const hijacked = [...new Set(Object.values(LINKS)
  .filter(entry => entry.retired?.reason === 'domain-taken-over')
  .map(entry => new URL(entry.url).hostname))];
const isHijacked = host => hijacked.some(h => host === h || host.endsWith('.' + h));

const pages = readdirSync(dist, { recursive: true })
  .filter(f => f.endsWith('.html'))
  .map(f => join(dist, f));
if (pages.length === 0) {
  console.error(`check-built: no HTML files under ${dist}; run the production build first.`);
  process.exit(2);
}

// Does a path on this site resolve to something in the build?
const built = pathname => {
  const local = join(dist, decodeURIComponent(pathname));
  if (!local.startsWith(dist)) {
    return false;
  }
  if (existsSync(local) && statSync(local).isFile()) {
    return true;
  }
  return existsSync(join(local, 'index.html'));
};

// Every URL a page references: href and src values, and each candidate in a srcset.
const references = html => {
  // Inline script bodies are code, not markup; keep only the opening tag's attributes.
  const markup = html.replace(/<script\b([^>]*)>[\s\S]*?<\/script>/gi, '<script$1></script>');
  const urls = [];
  for (const [tag] of markup.matchAll(/<[a-z][^>]*>/gi)) {
    if (/^<base\b/i.test(tag)) {
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

const missing = [];
const toHijacked = [];
let checked = 0;
for (const page of pages) {
  const name = page.slice(dist.length + 1);
  for (const ref of references(readFileSync(page, 'utf8'))) {
    if (ref === '' || /^(#|mailto:|tel:|data:|javascript:)/i.test(ref)) {
      continue;
    }
    let url;
    try {
      url = new URL(ref.replaceAll('&amp;', '&'), SITE);
    } catch {
      continue;
    }
    if (isHijacked(url.hostname)) {
      toHijacked.push(`${name}: ${ref}`);
    } else if (url.origin === new URL(SITE).origin) {
      checked++;
      if (!built(url.pathname) && !ABSENT_IN_CHECKOUT.has(url.pathname)) {
        missing.push(`${name}: ${ref}`);
      }
    }
  }
}

let failed = false;
if (missing.length > 0) {
  failed = true;
  console.error(`check-built: ${missing.length} link(s) to files or pages that are not in the build:`);
  for (const m of [...new Set(missing)]) {
    console.error('  ' + m);
  }
}
if (toHijacked.length > 0) {
  failed = true;
  console.error(`check-built: ${toHijacked.length} link(s) to hijacked domains (${hijacked.join(', ')}):`);
  for (const h of toHijacked) {
    console.error('  ' + h);
  }
}
if (failed) {
  process.exit(1);
}
console.log(`check-built: ${pages.length} pages, ${checked} on-site links all in the build; ` +
  `no links to hijacked domains (${hijacked.join(', ')}).`);
