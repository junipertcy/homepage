import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then((ref: any) => {
  // Ensure Angular destroys itself on hot reloads.
  if ((window as any)['ngRef']) {
    (window as any)['ngRef'].destroy();
  }
  (window as any)['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch((err: any) => console.error(err));
