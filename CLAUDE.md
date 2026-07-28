# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

The source for <https://junipertcy.info>, a personal academic/professional site (Angular 22, static, hosted on S3 + CloudFront). It is authored content, not a product: prose, publication lists, talks, and teaching materials are typed by hand into component templates. Treat page text as **the author's writing**, and code as the vehicle for it.

## Working agreement

The owner edited this site by hand for years and wants to keep line-by-line control. Follow these rules over any general instinct to be helpful-by-doing-more.

1. **One concern per change.** Do not fix unrelated things you notice in a file you are editing. Report them instead, at the end.
2. **Never rewrite prose.** Do not "improve" wording, tone, or punctuation in templates. If asked to add content, match the surrounding voice and use the same typographic characters already in the file (curly quotes `’ “ ”`, en/em dashes, `&nbsp;` where present).
3. **Preserve formatting as-is.** Existing templates have hand-tuned indentation and inline `style=` attributes. Do not reflow, reformat, or reorder attributes in lines you are not otherwise changing. There is no Prettier in effect here (`.prettierrc` is empty and gitignored) — `.editorconfig` is the only formatter contract: 2-space indent, single quotes in `.ts`, final newline, trim trailing whitespace (not in `.md`).
4. **Show before you commit.** Make edits, then stop and let the owner read `git diff`. Do not `git add`/`git commit`/`git push` unless explicitly asked in that message.
5. **Never deploy on your own.** `./deploy.sh -s` publishes to the live site and invalidates CloudFront. It is outward-facing and requires an explicit, in-the-moment go-ahead.
6. **Ask when the answer is content, not code.** Dates, venue names, whether a paper is out, which entries to keep — these are facts only the owner has. Ask rather than infer or invent, and never fabricate a publication, talk, date, or URL.
7. **No new dependencies, no framework upgrades, no refactors** unless that is the request. This site's value is stability; the architecture below is deliberately plain.

## Commands

Package manager is **pnpm only** (`preinstall` runs `npx only-allow pnpm`).

```bash
pnpm start                          # dev server → localhost:4200 (development config)
ng build --configuration production # production build → dist/browser
pnpm build                          # same as above (production is defaultConfiguration)
pnpm up -i                          # interactive dependency update
./deploy.sh -s                      # build + MD5-diff sync to S3 + CloudFront invalidation (ASK FIRST)
./deploy.sh -d                      # additionally purge old js/css/font objects from S3 first
```

**Verified working:** production build (~6s, 2.59 MB initial / 447 kB transfer). These four are the only scripts in `package.json` — `test`, `lint`, and `e2e` were removed in July 2026 because none of them had a working target.

**There are no tests and no linter.** This is deliberate, not an oversight: the 40 `*.spec.ts` files were untouched CLI boilerplate (`should create`, plus one spec asserting an `<h1>` reading `'Welcome to app!'` that has said `'Tzu-Chi Yen'` for years), and the Karma harness had been broken since the zone.js 0.15 upgrade. All of it was deleted rather than left to imply coverage that never existed. Do not add a test framework or `ng add angular-eslint` on your own initiative — both are decisions for the owner. **The production build is the only gate**, locally and in CI.

**pnpm quirks.** `pnpm <script>` may abort with `ERR_PNPM_ABORTED_REMOVE_MODULES_DIR_NO_TTY` when pnpm 11 sees dependency drift and wants to purge `node_modules`; prefix with `CI=true` or call `ng ...` directly rather than guessing at a purge. Native build scripts are approved in `pnpm-workspace.yaml` under `allowBuilds:` (pnpm 11 renamed this from `onlyBuiltDependencies` and rewrites the file itself if the key is wrong).

## Where content lives

Almost every request is a content edit. Go straight to the file:

| To change | Edit |
|---|---|
| Homepage intro + **News** timeline | `src/app/news/news.component.html` (~630 lines) |
| Papers, preprints, proceedings, translations | `src/app/publications/publications.component.ts` — data is hardcoded in the constructor |
| Talks / posters | `src/app/talks/**` |
| Teaching pages per course | `src/app/teaching/cu/{2270,3308,5352,5822}/` |
| Activities (seminars, refereeing, personal, TW) | `src/app/activities/{sem,workshop,ref,pers,tw,inact}/` |
| Bio, CV/résumé links | `src/app/about/about.component.html`, `src/app/app.component.ts` (`cv_file`, `resume_file`) |
| Site `<head>`, SEO, JSON-LD Person schema | `src/index.html` |
| PDFs, images, slides | `src/assets/` (see Git LFS below) |
| Key → asset-path mapping for lecture PDFs | `src/app/@pipes/internal-uri-resolver.pipe.ts` (a `switch`; add a `case`) |

### The News timeline has a manual year switch

`news.component.html` renders one `@if (thisYear === 'YYYY') { <ul>…</ul> }` block per year, and `news.component.ts` holds `thisYear = '<current year>'` as the default. **Adding a new year takes three coordinated edits:** a new `<nz-option nzValue="YYYY">` in the `nz-select`, a new `@if` block, and bumping `thisYear`. Newest entries go at the top of their year's list; date format is `M/D`.

### Publications are objects, not a data file

`src/app/publications/paper.ts` defines `Article` (constructed with a DOI string, optional arXiv id) and `ArXiv` (constructed with an arXiv id); both derive their `doi`/`arXiv` URLs in the constructor. `publications.component.ts` instantiates numbered fields (`j5`, `j4`, `c1`, `t1`, …), assigns `title`/`authors`/`venue`/`summary`/`code`/`paper_pdf` imperatively in the constructor, and collects them into arrays **in reverse-chronological order** (`articles = [this.j5, this.j4, ...]`). A new paper means a new numbered field plus adding it to the front of its array. `summary` and `venue` contain raw HTML (`<br>`) rendered by the template.

## Architecture

**Hybrid NgModule + standalone.** `src/main.ts` bootstraps `AppModule` via `platformBrowserDynamic()` (not `bootstrapApplication`). `AppComponent` and `NewsComponent` are explicitly `standalone: false` and declared in `AppModule`; every other feature component is standalone and listed in `AppModule.imports`. Shared ng-zorro modules are re-exported from `src/app/ng-zorro-antd.module.ts` (most imports are commented out — uncomment rather than adding a new import path).

**Templates use block control flow.** `@if` / `@for` throughout — the `*ngIf` / `*ngFor` structural directives were migrated out by the Angular 21 schematic. Write new markup in block syntax.

**Routing** is a single inline `Routes` array in `src/app/app.module.ts:67-154`. Top-level routes use eager `component:`; the `activities` and `teaching` sections use lazy `loadComponent:` children with a `redirectTo` default. `**` falls through to `ErrorComponent`.

**Page titles are derived from the URL**, not from route `data`. `AppComponent.getTitleFromRouter()` subscribes to `router.events` and builds `'TCY | ' + path` (or `'Tzu-Chi Yen'` for `/`). Adding a route gets a title automatically; overriding one means adding `data: { title: ... }`.

**Dark mode** is the DarkReader library toggled at runtime, persisted in `localStorage` under `darkMode` — not a CSS theme. It is the reason `darkreader` is in `allowedCommonJsDependencies`.

**"Last updated" is live.** `GithubService` fetches `api.github.com/repos/junipertcy/homepage/commits` and shows the newest commit date. The footer date changes when you push, not when you build.

**The three decorative visualizations** (`app-simplex` D3 force-directed simplicial complex, `app-gpr` graph projection, `app-pixel-pattern`) are randomized on demand. The refresh icon on the homepage calls `ReloadService.triggerReload(id)` for all three; each component subscribes to `reloadTrigger$` (a `BehaviorSubject`) and regenerates when it sees its own id. `src/app/app.config.ts` is **not** an Angular `ApplicationConfig` — it is a plain `CONFIG` object (`N`, `SPECTRUM` color ramp, Zachary karate-club edge list) feeding these visualizations.

**Styling** is layered global CSS, not component-scoped design tokens: Angular Material `indigo-pink` prebuilt theme → ng-zorro CSS → `src/styles/global.css` (bare-element rules like `div { font-family: 'Equity B' }`) → `src/styles/default.less` (ng-zorro LESS variable overrides, `@primary-color: #276190`). Because global.css styles bare elements, a change there affects every page. Production budget warns at 10 kb per component stylesheet.

## Do not touch / do not commit

- **`deploy.sh`** is gitignored and contains the real CloudFront distribution id. `deploy.sh.template` is the tracked, redacted version. Never commit `deploy.sh`, never paste its `DISTID` into a tracked file, and never "restore" it by copying the template over it. The two have **diverged**: `deploy.sh` now carries MIME-type coverage, `Cache-Control` headers, and scoped CloudFront invalidation that the template lacks. Porting those improvements back into `deploy.sh.template` (minus the id) is a reasonable follow-up, but it is a separate, explicit task.
- **`src/styles/fonts/*.woff2`** are commercially licensed (Equity and Concourse, by Matthew Butterick) and gitignored on purpose. Never `git add -f` a font, never inline one as base64, never copy them elsewhere in the repo.
- **Git LFS** tracks `*.pdf *.png *.jpg *.jpeg *.m4v`. Add binaries normally (the filter handles it) but do not convert an LFS pointer file into anything else, and do not assume a pointer file is corrupt.
- **`dist/`, `.angular/`, `node_modules/`** are build artifacts. Note that `angular.json` says `outputPath: "dist"` while the application builder actually emits to `dist/browser/` — `deploy.sh` detects both.

## Dependency pins are exact on purpose

Every `@angular/*` version is pinned without a `^`. This is deliberate: `@angular/core` declares `@angular/compiler` as an **exact** peer, so a floating range on one and a pin on the other silently drifts them apart (which is exactly what happened before July 2026 — core sat at 20.2.1 while the compiler floated to 20.3.15). Framework, CLI, and `@angular/build` are all on **22.0.8**; `@angular/material`/`cdk` and `ng-zorro-antd` on **22.x**. `typescript` is pinned to **6.0.3** because Angular 22's `compiler-cli` peer is `>=6.0 <6.1` — **TypeScript 7 is published but rejected**, so do not follow pnpm's "7.0.2 is available" hint. Bump these as a set, never individually.

**Upgrading a major takes more than `ng update @angular/core@N`.** Learned going 20 → 22 in July 2026:

- `ng update` steps **one major at a time** and refuses to run on a dirty tree. Commit each verified step; do not `git stash` across an `ng update`, which purges `node_modules` and can leave the stash unpoppable.
- If the local CLI is older than the target, `ng update` fetches a temporary CLI that **itself dirties `pnpm-lock.yaml`** and then trips its own clean-tree check. Install the target `@angular/cli` locally first.
- Peer-blocking libraries must be bumped by hand *before* the framework, or the migration aborts: `@ant-design/icons-angular`, `@fortawesome/angular-fontawesome`, and `typescript`. Prefer this over `--force`.
- The Angular 21 schematic rewrites every template to `@if`/`@for`. That is a large diff through hand-authored prose — **verify visible text is unchanged** (strip tags and diff the words) rather than eyeballing it.

## CI

`.github/workflows/build.yml` runs the production build on push and PR to `main`. It has to stub the licensed fonts first: `src/styles/font-face.css` has 32 `url()` references to gitignored `.woff2` files, and Angular's `angular-css-resource` plugin **fails the build** on any it cannot resolve — so a bare checkout cannot compile. The workflow writes zero-byte placeholders at those paths. That makes the gate a check that the app *compiles*; it says nothing about how text renders. Keep the stub step in sync if font filenames change.

## Known drift (report, don't silently fix)

- `.ruff_cache/` (a Python linter cache) is a stray directory. It writes its own `.gitignore`, so it self-ignores and is clutter rather than a commit risk.
- No `engines` field or `.nvmrc`. Angular 22 requires `^22.22.3 || ^24.15.0 || >=26.0.0`, so local Node 26 is now officially supported and CI's `node-version: 22` resolves to a 22.x new enough to satisfy it. Nothing enforces either.
- `tsconfig.json` carries `ignoreDeprecations: "6.0"` to silence a TS6 error on `baseUrl`, which is load-bearing — three files import via `'src/app/…'`. Rewriting those to relative paths would let both go.
- `tsconfig.app.json` suppresses the `nullishCoalescingNotNullable` and `optionalChainNotNullable` extended diagnostics. The Angular 22 migration added this to preserve pre-22 behavior; removing the suppression may surface real template warnings.
- `deploy.sh` uses `--acl public-read`, which only works because the bucket has ACLs enabled; modern S3 defaults reject it.

## Reference

- Author: Tzu-Chi Yen (顏子祺), Boulder, CO — <tzuchi.yen@colorado.edu>
- Repo: `github.com/junipertcy/homepage` · Live: <https://junipertcy.info>
- S3 bucket `junipertcy.info`; access control (e.g. denying certain static files) is via S3 Bucket Policy
- [Angular Update Guide](https://update.angular.io/) for framework upgrades
- Font licenses: [Equity](https://typographyforlawyers.com/equity.html), [Concourse](https://typographyforlawyers.com/concourse.html), [terms](https://mbtype.com/license/)
