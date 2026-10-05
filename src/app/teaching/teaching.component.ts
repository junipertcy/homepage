import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ElementRef, ViewChild, NgZone } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
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
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./teaching.component.css',]
})
export class TeachingComponent implements OnInit, OnDestroy {

  isCUActive = false; // Boolean to track if CU should be highlighted
  @ViewChild('localStart') localStart?: ElementRef<HTMLElement>;
  isCompact: boolean;
  localOpen = false;
  private viewport: MediaQueryList;
  private pendingLocal?: string;
  private routerEventsSub?: Subscription;

  get currentCategory(): string {
    const segment = this.router.url.split('/')[2];
    if (this.isCUActive || segment === 'cu' || !segment) return 'CU';
    return segment === 'tw' ? '台灣' : 'Resources';
  }

  private readonly onViewportChange = (event: MediaQueryListEvent) => this.zone.run(() => {
    const focused = document.activeElement as HTMLElement | null;
    const inLinks = !!focused?.closest('#teaching-navigation');
    const inTrigger = !!focused?.closest('.local-trigger');
    this.isCompact = !event.matches;
    this.localOpen = false;
    if ((this.isCompact && inLinks) || (!this.isCompact && inTrigger)) {
      setTimeout(() => document.querySelector<HTMLElement>(this.isCompact ? 'app-teaching .local-trigger' : 'app-teaching #teaching-navigation a')?.focus());
    }
  });

  constructor(public router: Router, private activatedRoute: ActivatedRoute, private zone: NgZone) {
    this.viewport = window.matchMedia('(min-width: 992px)');
    this.isCompact = !this.viewport.matches;
    this.viewport.addEventListener('change', this.onViewportChange);
  }

  closeLocal(event: Event): void {
    if (!this.localOpen) return;
    event.preventDefault();
    event.stopPropagation();
    this.localOpen = false;
    document.querySelector<HTMLElement>('app-teaching .local-trigger')?.focus();
  }

  selectLocal(event: MouseEvent, segment: string): void {
    if (!this.isCompact || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const path = '/teaching/' + segment;
    if (this.router.url === path) {
      this.localOpen = false;
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
            this.localOpen = false;
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
    this.viewport.removeEventListener('change', this.onViewportChange);
  }

  checkIfCuIsActive(): void {
    const cuClassRoutes = ['2270', '3308', '5352', '5822'];
    
    // Get the current child route under /teaching
    const currentRoute = this.activatedRoute.firstChild?.snapshot.url[0]?.path;
    
    // Check if it's one of CU's classes or CU itself
    this.isCUActive = currentRoute ? cuClassRoutes.includes(currentRoute) || currentRoute === 'cu' : false;
  }
}
