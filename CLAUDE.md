# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal academic website built with Angular 20, showcasing research publications, teaching materials, talks, and activities. The site is statically hosted on Amazon S3 and features interactive D3.js visualizations of simplicial complexes and graph projections.

## Build & Development Commands

**Package Manager**: This project uses `pnpm` exclusively (enforced via preinstall hook).

```bash
# Install dependencies
pnpm install

# Development server
pnpm start
# or
ng serve

# Production build
pnpm build
# or
ng build

# Run tests
pnpm test
# or
ng test

# Lint
pnpm lint
# or
ng lint

# Update dependencies
pnpm up -i
```

## Architecture

### Application Structure

- **Routing**: Defined inline in `src/app/app.module.ts` (lines 67-154) using Angular Router with lazy-loaded child components for activities and teaching sections
- **Main Component**: `AppComponent` handles dark mode (via DarkReader library), dynamic page titles, and fetches last commit date from GitHub API
- **Standalone Components**: Most feature components are standalone (publications, teaching, talks, activities, etc.)

### Key Architectural Patterns

1. **Hybrid Module/Standalone Architecture**:
   - Core app uses NgModule (`app.module.ts`)
   - Feature components are mostly standalone with lazy loading
   - Shared ng-zorro-antd modules exported via `NgZorroAntdModule`

2. **Data Management**:
   - Publication data is hardcoded in component constructors (`publications.component.ts`)
   - Article/ArXiv classes defined in `src/app/publications/paper.ts`
   - No backend API except GitHub commits endpoint

3. **Services**:
   - `GithubService` (`src/app/@services/github.service.ts`): Fetches last commit date from GitHub API
   - `ReloadService` (`src/app/@services/reload.service.ts`): Manages component reload triggers for interactive visualizations

4. **Custom Pipes**:
   - `InternalUriResolverPipe`: Maps string keys to asset paths (teaching materials, PDFs)
   - `Str2urlPipe`: URL transformation utilities

5. **Interactive Visualizations**:
   - `SimplexComponent` (`src/app/@components/simplex/simplex.component.ts`): D3.js force-directed graph of simplicial complexes with random generation
   - `GprComponent`: Graph projection visualization
   - `PixelPatternComponent`: Decorative patterns

### UI Framework Stack

- **Angular Material**: Primary theme (`indigo-pink.css`)
- **ng-zorro-antd**: Extensive use for layout, tables, tags, icons, modals, etc.
- **ng-bootstrap**: Additional Bootstrap components
- **Font Awesome**: Icon library
- **Ant Design Icons**: Additional icons

### Styling

- Global styles in `src/styles/global.css`
- LESS stylesheet: `src/styles/default.less`
- Licensed fonts: Equity (serif) and Concourse (sans-serif) from Matthew Butterick
- Font definitions in `src/styles/font-face.css`

### Routing Structure

Main routes:
- `/` → NewsComponent (home)
- `/about` → AboutComponent
- `/publications` → PublicationsComponent (hardcoded research data)
- `/teaching` → TeachingComponent with child routes for courses (5352, 5822, 3308, 2270)
- `/talks` → TalksComponent
- `/activities` → ActivitiesComponent with children (sem, workshop, ref, pers, tw, inact)
- `/books`, `/reading`, `/textbooks`, `/notes`, `/notion` → Various content pages
- `**` → ErrorComponent (404)

## Testing

- Test framework: Jasmine + Karma
- Test files follow `*.spec.ts` convention
- Karma config: `karma.conf.js`
- TypeScript config for tests: `tsconfig.spec.json`

## Build Configuration

- Main build config: `angular.json`
- Build output: `dist/`
- Production build enables optimization, disables source maps, uses environment file replacement
- Allowed CommonJS dependencies: `darkreader`
- Budget warning threshold for component styles: 10kb

## Environment Files

- Development: `src/environments/environment.ts`
- Production: `src/environments/environment.prod.ts`

## Deployment

Deployed to Amazon S3 bucket. Access control managed via S3 Bucket Policy.

## Angular Version

Angular 20.2.x with strict mode enabled and using the latest application builder (`@angular-devkit/build-angular:application`).

## Updating Angular

Refer to the [Angular Update Guide](https://update.angular.io/) when upgrading framework versions.
