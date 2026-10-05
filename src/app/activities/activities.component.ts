import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ElementRef, ViewChild, DestroyRef, Injector, afterNextRender, computed, inject, signal } from '@angular/core';
import { RouterModule, Router, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ViewportService } from '../@services/viewport.service';
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
  private readonly viewport = inject(ViewportService);
  private readonly injector = inject(Injector);
  readonly isCompact = computed(() => !this.viewport.isWide());
  readonly localOpen = signal(false);
  private pendingLocal?: string;
  private routerEventsSub?: Subscription;

  private readonly url = toSignal(
    inject(Router).events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd), map(event => event.urlAfterRedirects)),
    { initialValue: inject(Router).url }
  );
  readonly currentCategory = computed(() => {
    const segment = this.url().split('/')[2];
    const labels: Record<string, string> = {
      sem: 'Seminar', workshop: 'Workshop', ref: 'Referee',
      pers: 'Personal', tw: '台灣', inact: 'More activities'
    };
    return labels[segment] ?? 'Seminar';
  });

  constructor(public router: Router) {
    // Runs before the layout switches, while the control that had focus is still focused.
    this.viewport.onCrossing(wide => {
      const focused = document.activeElement as HTMLElement | null;
      const inLinks = !!focused?.closest('#activities-navigation');
      const inTrigger = !!focused?.closest('.local-trigger');
      const inWideMore = !!focused?.closest('.misc-icon-button');
      const compact = !wide;
      this.localOpen.set(false);
      if ((compact && (inLinks || inWideMore)) || (!compact && inTrigger)) {
        afterNextRender(() => document.querySelector<HTMLElement>(compact ? 'app-activities .local-trigger' : 'app-activities #activities-navigation a')?.focus(), { injector: this.injector });
      }
    }, inject(DestroyRef));
  }

  closeLocal(event: Event): void {
    if (!this.localOpen()) return;
    event.preventDefault();
    event.stopPropagation();
    this.localOpen.set(false);
    document.querySelector<HTMLElement>('app-activities .local-trigger')?.focus();
  }

  selectLocal(event: MouseEvent, segment: string): void {
    if (!this.isCompact() || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const path = '/activities/' + segment;
    if (this.router.url === path) {
      this.localOpen.set(false);
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
          this.localOpen.set(false);
          setTimeout(() => this.localStart?.nativeElement.focus());
        }
      } else if (event instanceof NavigationCancel || event instanceof NavigationError) {
        this.pendingLocal = undefined;
      }
    });
  }

  ngOnDestroy(): void {
    this.routerEventsSub?.unsubscribe();
  }
}
