import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ElementRef, ViewChild, NgZone } from '@angular/core';
import { RouterModule, Router, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Subscription } from 'rxjs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/animation';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  imports: [
    NzButtonModule,
    RouterModule, 
    NzIconModule,
    NzNoAnimationModule,
    NzPageHeaderModule,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./activities.component.css']
})

export class ActivitiesComponent implements OnInit, OnDestroy {
  @ViewChild('localStart') localStart?: ElementRef<HTMLElement>;
  isCompact: boolean;
  localOpen = false;
  private viewport: MediaQueryList;
  private pendingLocal?: string;
  private routerEventsSub?: Subscription;

  get currentCategory(): string {
    const segment = this.router.url.split('/')[2];
    const labels: Record<string, string> = {
      sem: 'Seminar', workshop: 'Workshop', ref: 'Referee',
      pers: 'Personal', tw: '台灣', inact: 'More activities'
    };
    return labels[segment] ?? 'Seminar';
  }

  private readonly onViewportChange = (event: MediaQueryListEvent) => this.zone.run(() => {
    const focused = document.activeElement as HTMLElement | null;
    const inLinks = !!focused?.closest('#activities-navigation');
    const inTrigger = !!focused?.closest('.local-trigger');
    const inWideMore = !!focused?.closest('.misc-icon-button');
    this.isCompact = !event.matches;
    this.localOpen = false;
    if ((this.isCompact && (inLinks || inWideMore)) || (!this.isCompact && inTrigger)) {
      setTimeout(() => document.querySelector<HTMLElement>(this.isCompact ? 'app-activities .local-trigger' : 'app-activities #activities-navigation a')?.focus());
    }
  });

  constructor(public router: Router, private zone: NgZone) {
    this.viewport = window.matchMedia('(min-width: 992px)');
    this.isCompact = !this.viewport.matches;
    this.viewport.addEventListener('change', this.onViewportChange);
  }

  closeLocal(event: Event): void {
    if (!this.localOpen) return;
    event.preventDefault();
    event.stopPropagation();
    this.localOpen = false;
    document.querySelector<HTMLElement>('app-activities .local-trigger')?.focus();
  }

  selectLocal(event: MouseEvent, segment: string): void {
    if (!this.isCompact || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const path = '/activities/' + segment;
    if (this.router.url === path) {
      this.localOpen = false;
      setTimeout(() => this.localStart?.nativeElement.focus());
    } else {
      this.pendingLocal = path;
    }
  }

  ngOnInit(): void {
    this.routerEventsSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.pendingLocal) {
        const selected = this.pendingLocal;
        this.pendingLocal = undefined;
        if (event.urlAfterRedirects === selected) {
          this.localOpen = false;
          setTimeout(() => this.localStart?.nativeElement.focus());
        }
      } else if (event instanceof NavigationCancel || event instanceof NavigationError) {
        this.pendingLocal = undefined;
      }
    });
  }

  ngOnDestroy(): void {
    this.routerEventsSub?.unsubscribe();
    this.viewport.removeEventListener('change', this.onViewportChange);
  }
}
