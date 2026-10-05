import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { DestroyRef, Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

/** The compact/wide boundary: NG-ZORRO's `lg`, and `max-width: 991px` in the stylesheets. */
export const WIDE_QUERY = '(min-width: 992px)';

/**
 * One listener on the 992px media query for the whole app. `isWide` drives templates;
 * `onCrossing` listeners run synchronously when the query flips, before the signal updates
 * the view, so they can still see which control had focus.
 */
@Injectable({ providedIn: 'root' })
export class ViewportService {
  private readonly wide = signal(false);
  /** True at 992 CSS px and wider. Always false on the server. */
  readonly isWide = this.wide.asReadonly();
  private readonly crossingListeners = new Set<(wide: boolean) => void>();

  constructor() {
    if (!isPlatformBrowser(inject(PLATFORM_ID))) return;
    const query = inject(DOCUMENT).defaultView!.matchMedia(WIDE_QUERY);
    this.wide.set(query.matches);
    query.addEventListener('change', event => this.cross(event.matches));
  }

  /** Calls `listener` on every 992px crossing until `destroyRef` is destroyed. */
  onCrossing(listener: (wide: boolean) => void, destroyRef: DestroyRef): void {
    this.crossingListeners.add(listener);
    destroyRef.onDestroy(() => this.crossingListeners.delete(listener));
  }

  private cross(wide: boolean): void {
    this.crossingListeners.forEach(listener => listener(wide));
    this.wide.set(wide);
  }
}
