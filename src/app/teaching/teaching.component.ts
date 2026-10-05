import { Component, OnInit, OnDestroy, ElementRef, ViewChild, DestroyRef, computed, inject, signal } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ViewportService } from '../@services/viewport.service';
import { CommonModule } from '@angular/common';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  imports: [
    CommonModule,
    RouterModule,
    NzPageHeaderModule,
  ],
  standalone: true,
  styleUrls: ['./teaching.component.css',]
})
export class TeachingComponent implements OnInit, OnDestroy {

  readonly isCUActive = signal(false); // Boolean to track if CU should be highlighted
  @ViewChild('localStart') localStart?: ElementRef<HTMLElement>;
  private readonly viewport = inject(ViewportService);
  readonly isCompact = computed(() => !this.viewport.isWide());
  readonly localOpen = signal(false);
  private pendingLocal?: string;
  private routerEventsSub?: Subscription;

  readonly url = toSignal(
    inject(Router).events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd), map(event => event.urlAfterRedirects)),
    { initialValue: inject(Router).url }
  );
  readonly currentCategory = computed(() => {
    const segment = this.url().split('/')[2];
    if (this.isCUActive() || segment === 'cu' || !segment) return 'CU';
    return segment === 'tw' ? '台灣' : 'Resources';
  });

  constructor(public router: Router, private activatedRoute: ActivatedRoute) {
    // Runs when the layout crosses 992px. CSS may already have hidden, and so blurred, the focused control.
    this.viewport.onCrossing(wide => {
      const focused = this.viewport.focusedAtCrossing();
      const inLinks = !!focused?.closest('#teaching-navigation');
      const inTrigger = !!focused?.closest('.local-trigger');
      const compact = !wide;
      this.localOpen.set(false);
      if ((compact && inLinks) || (!compact && inTrigger)) {
        // The targets are always in the DOM (CSS chooses what shows); no Angular render follows a crossing.
        setTimeout(() => document.querySelector<HTMLElement>(compact ? 'app-teaching .local-trigger' : 'app-teaching #teaching-navigation a')?.focus());
      }
    }, inject(DestroyRef));
  }

  closeLocal(event: Event): void {
    if (!this.localOpen()) return;
    event.preventDefault();
    event.stopPropagation();
    this.localOpen.set(false);
    document.querySelector<HTMLElement>('app-teaching .local-trigger')?.focus();
  }

  selectLocal(event: MouseEvent, segment: string): void {
    if (!this.isCompact() || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const path = '/teaching/' + segment;
    if (this.router.url === path) {
      this.localOpen.set(false);
      setTimeout(() => this.localStart?.nativeElement.focus());
    } else {
      this.pendingLocal = path;
    }
  }

  ngOnInit(): void {
    // Subscribe to router events to detect route changes
    this.routerEventsSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkIfCuIsActive();
        if (this.pendingLocal) {
          const selected = this.pendingLocal;
          this.pendingLocal = undefined;
          if (event.urlAfterRedirects === selected) {
            this.localOpen.set(false);
            setTimeout(() => this.localStart?.nativeElement.focus());
          }
        }
      } else if (event instanceof NavigationCancel || event instanceof NavigationError) {
        this.pendingLocal = undefined;
      }
    });

    // Initial check when component loads
    this.checkIfCuIsActive();
  }

  ngOnDestroy(): void {
    this.routerEventsSub?.unsubscribe();
  }

  checkIfCuIsActive(): void {
    const cuClassRoutes = ['2270', '3308', '5352', '5822'];
    
    // Get the current child route under /teaching
    const currentRoute = this.activatedRoute.firstChild?.snapshot.url[0]?.path;
    
    // Check if it's one of CU's classes or CU itself
    this.isCUActive.set(currentRoute ? cuClassRoutes.includes(currentRoute) || currentRoute === 'cu' : false);
  }
}
