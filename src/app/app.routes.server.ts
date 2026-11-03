import { RenderMode, ServerRoute } from '@angular/ssr';
import { retiredKeys } from './links/links';

export const serverRoutes: ServerRoute[] = [
  {
    // One prerendered page per retired link in src/app/links/links.ts.
    path: 'bokhi/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => retiredKeys().map(id => ({ id }))
  },
  {
    // /bokhi alone is not a page: no prerendered file, so the CDN answers 404 with the error view.
    path: 'bokhi',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
