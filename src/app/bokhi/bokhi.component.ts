import { Component, OnDestroy, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ErrorComponent } from '../error/error.component';
import { LINKS, LinkEntry, RetiredInfo, RetiredReason } from '../links/links';

// The owner’s wording for each reason (openspec/changes/preserve-outgoing-links/files/bokhi-wording.md).
const REASONS: Record<RetiredReason, string> = {
  'removed-by-owner': 'its owner took the page down',
  'domain-expired': 'the domain was given up and no longer exists',
  'domain-taken-over': 'the domain now belongs to someone unrelated, so I no longer link to it',
  'server-failure': 'its server no longer answers properly',
  'account-removed': 'the account no longer exists',
  'file-lost': 'the file was lost when my old wiki went offline',
};

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'];

// '2021-06-22' → 'June 22, 2021'
function longDate(ymd: string): string {
  const [y, m, d] = ymd.split('-').map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

// 'YYYY-MM-DD' → 'on June 22, 2021'; 'YYYY' → 'in 2019'; 'before YYYY' → 'before 2020'
function linkedOnPhrase(linkedOn: string): string {
  if (/^\d{4}-\d{2}-\d{2}$/.test(linkedOn)) {
    return 'on ' + longDate(linkedOn);
  }
  if (/^\d{4}$/.test(linkedOn)) {
    return 'in ' + linkedOn;
  }
  return linkedOn;
}

@Component({
  selector: 'app-bokhi',
  standalone: true,
  imports: [ErrorComponent],
  templateUrl: './bokhi.component.html',
  styleUrl: './bokhi.component.css'
})
export class BokhiComponent implements OnDestroy {
  private readonly meta = inject(Meta);
  private readonly route = inject(ActivatedRoute);

  private readonly id = toSignal(this.route.paramMap.pipe(map(params => params.get('id') ?? '')),
    { initialValue: this.route.snapshot.paramMap.get('id') ?? '' });

  // The retired link this page explains, or undefined for an unknown id.
  readonly link = computed(() => {
    const entry: LinkEntry | undefined = (LINKS as Record<string, LinkEntry>)[this.id()];
    if (!entry?.retired) {
      return undefined;
    }
    const retired: RetiredInfo = entry.retired;
    const captured = retired.archive?.match(/\/web\/(\d{4})(\d{2})(\d{2})/);
    return {
      url: entry.url,
      about: retired.about,
      reason: REASONS[retired.reason],
      linkedOn: linkedOnPhrase(retired.linkedOn),
      // Robust Links: the linking date, only when known to the day.
      versionDate: /^\d{4}-\d{2}-\d{2}$/.test(retired.linkedOn) ? retired.linkedOn : null,
      archive: retired.archive,
      captured: captured ? longDate(`${captured[1]}-${captured[2]}-${captured[3]}`) : '',
    };
  });

  constructor() {
    // These pages explain dead links; search engines need not index them.
    this.meta.updateTag({ name: 'robots', content: 'noindex' });
  }

  ngOnDestroy(): void {
    this.meta.removeTag("name='robots'");
  }
}
