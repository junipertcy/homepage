import { Component, computed, input } from '@angular/core';
import { GLYPHS, GlyphName } from './glyphs';

/**
 * An inline SVG glyph in place of an icon font or icon runtime. The host stays inline, like the
 * <fa-icon>, <mat-icon> and <i class="ai"> elements it replaces, so classes and inline styles on it
 * (font-size, positioning) keep working.
 */
@Component({
  selector: 'app-icon',
  template: `<svg [attr.viewBox]="glyph().viewBox" [class]="'glyph glyph-' + glyph().kind" [style.width.em]="width()"
    aria-hidden="true" focusable="false"><path fill="currentColor" [attr.d]="glyph().d" /></svg>`,
  styles: `
    .glyph { display: inline-block; height: 1em; overflow: visible; }
    .glyph-fa { box-sizing: content-box; vertical-align: -0.125em; }
    .glyph-ai { vertical-align: -0.125em; }
    .glyph-material { vertical-align: top; }
  `,
})
export class IconComponent {
  readonly name = input.required<GlyphName>();
  readonly glyph = computed(() => GLYPHS[this.name()]);
  // Font Awesome 7 draws every icon 1.25em wide; the others take their viewBox aspect ratio.
  readonly width = computed(() => {
    const glyph = this.glyph();
    if (glyph.kind === 'fa') return 1.25;
    const [, , w, h] = glyph.viewBox.split(' ').map(Number);
    return w / h;
  });
}
