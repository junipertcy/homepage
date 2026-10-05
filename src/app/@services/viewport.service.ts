import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { DestroyRef, Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

/** The compact/wide boundary: NG-ZORRO's `lg`, and `max-width: 991px` in the stylesheets. */
export const WIDE_QUERY = '(min-width: 992px)';

/**
 * One listener on the 992px media query for the whole app. `isWide` drives templates;
 * `onCrossing` listeners run when the query flips, before the signal updates the view.
 * They ask `focusedAtCrossing()` which control had focus.
 */
@Injectable({ providedIn: 'root' })
export class ViewportService {
  private readonly document = inject(DOCUMENT);
  private readonly wide = signal(false);
  /** True at 992 CSS px and wider. Always false on the server. */
  readonly isWide = this.wide.asReadonly();
  private readonly crossingListeners = new Set<(wide: boolean) => void>();
  private blurredByLayout?: { element: Element; at: number };

  constructor() {
    if (!isPlatformBrowser(inject(PLATFORM_ID))) return;
    const query = this.document.defaultView!.matchMedia(WIDE_QUERY);
    this.wide.set(query.matches);
    query.addEventListener('change', event => this.cross(event.matches));
    this.document.addEventListener('focusout', event => this.noteBlur(event));
  }

  /** Calls `listener` on every 992px crossing until `destroyRef` is destroyed. */
  onCrossing(listener: (wide: boolean) => void, destroyRef: DestroyRef): void {
    this.crossingListeners.add(listener);
    destroyRef.onDestroy(() => this.crossingListeners.delete(listener));
  }

  /**
   * The control that had focus when the layout crossed 992px. CSS can hide that control, and the
   * browser then blurs it, sometimes before the media query reports the change; so this falls back
   * to a control blurred that way within the last 250 ms.
   */
  focusedAtCrossing(): Element | null {
    const active = this.document.activeElement;
    if (active && active !== this.document.body) return active;
    const blurred = this.blurredByLayout;
    return blurred && performance.now() - blurred.at < 250 ? blurred.element : null;
  }

  private cross(wide: boolean): void {
    this.crossingListeners.forEach(listener => listener(wide));
    this.blurredByLayout = undefined;
    this.wide.set(wide);
  }

  // Focus left for nowhere, from a control that is no longer rendered: the layout hid it.
  private noteBlur(event: FocusEvent): void {
    const target = event.target as Element;
    if (event.relatedTarget === null && !target.checkVisibility()) {
      this.blurredByLayout = { element: target, at: performance.now() };
    }
  }
}
