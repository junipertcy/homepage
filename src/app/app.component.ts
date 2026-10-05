import { Component, Inject, ElementRef, ViewChild, DestroyRef, PLATFORM_ID, afterNextRender, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

import { Router, RouterLink, RouterLinkActive, RouterOutlet, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DOCUMENT, NgTemplateOutlet, isPlatformBrowser } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { IconComponent } from './@components/icon/icon.component';


// To make the update time dynamic based on my last GitHub push
import { GithubService } from './@services/github.service';
import { ViewportService } from './@services/viewport.service';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NgTemplateOutlet, NzLayoutModule, NzTagModule, NzIconModule, IconComponent],
  providers: [Title],
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
  ]
})

export class AppComponent {

  @ViewChild('contentStart') contentStart?: ElementRef<HTMLElement>;
  private readonly viewport = inject(ViewportService);
  readonly isCompact = computed(() => !this.viewport.isWide());
  readonly menuOpen = signal(false);
  // The committed URL as a signal, so the aria-current bindings refresh without zone-driven checks.
  readonly url = toSignal(
    inject(Router).events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd), map(event => event.urlAfterRedirects)),
    { initialValue: inject(Router).url }
  );
  private pendingPrimary?: string;

  title = 'app';
  // isDonationBannerShown = true;
  isLoaded = true;
  cv_file = "../../assets/pdf/Tzu-Chi_Yen_CV.pdf";
  resume_file = "../../assets/pdf/Tzu-Chi_Yen_Resume.pdf";
  readonly lastUpdateDate = signal<string | undefined>(undefined);
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getTitleFromRouter = function (router: Router) {
    for (const r of router.config) {
      if (router.url.split('/').length > 2 && r.path === router.url.split('/')[1]) {
        return r.data ? r.data['title'] : 'TCY | ' + r.path + ' | ' + router.url.split('/')[2];
      }
      if ('/' + r.path === router.url) {
        if (r.path === '') {
          return 'Tzu-Chi Yen';
        }  // Feb 5, 24: Strange. I cannot use "else" to simplify the code.
        return r.data ? r.data['title'] : 'TCY | ' + r.path;
      }
    }
  };

  isDarkMode = false;
  hover: boolean = false;

  closeMenu(event: Event): void {
    if (!this.menuOpen()) return;
    event.preventDefault();
    event.stopPropagation();
    this.menuOpen.set(false);
    this.document.querySelector<HTMLElement>('.menu-trigger')?.focus();
  }

  selectPrimary(event: MouseEvent, path: string): void {
    if (!this.isCompact() || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (this.router.url === path) {
      this.menuOpen.set(false);
      setTimeout(() => this.contentStart?.nativeElement.focus());
    } else {
      this.pendingPrimary = path;
    }
  }
  // A tab opened before a deploy that deleted old bundles (deploy.sh -d) can ask for a route chunk
  // that no longer exists. Load the destination as a fresh page instead of leaving the click dead.
  // The pathname guard stops a reload loop if the fresh page fails the same way.
  private reloadIfChunkMissing(event: NavigationError): void {
    const message = String((event.error as Error | undefined)?.message ?? event.error);
    const destination = event.url.split(/[?#]/)[0];
    if (/dynamically imported module|Importing a module script failed/.test(message) && this.document.location.pathname !== destination) {
      this.document.location.assign(event.url);
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    try {
      localStorage.setItem('darkMode', this.isDarkMode.toString());
    } catch {
      // Storage is blocked: the choice then lasts for this page view only.
    }
    this.applyDarkMode();
  }

  // Storage can be unavailable (blocked cookies, some embedded browsers); treat that as light mode.
  private readDarkModePreference(): boolean {
    try {
      return localStorage.getItem('darkMode') === 'true';
    } catch {
      return false;
    }
  }

  // DarkReader is loaded on demand so it stays out of the initial bundle for
  // visitors who never turn dark mode on.
  private darkReader?: Promise<typeof import('darkreader')>;

  private async applyDarkMode(): Promise<void> {
    if (this.isDarkMode) {
      this.darkReader ??= import('darkreader');
      (await this.darkReader).enable({
        brightness: 100,
        contrast: 90,
        sepia: 10
      });
    } else if (this.darkReader) {
      (await this.darkReader).disable();
    }
    // Reveal the page that the inline script in index.html hid until dark mode was applied.
    this.document.documentElement.classList.remove('dark-pending');
  }

  constructor(
    private githubService: GithubService,
    public router: Router,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.viewport.onCrossing(wide => this.onViewportCrossing(wide), inject(DestroyRef));
    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      this.isDarkMode = this.readDarkModePreference();
      this.applyDarkMode();
    }
    // Fetched in the browser only, after the first render: prerendering never calls GitHub, and the
    // footer shows the newest commit at the time of the visit, not of the build.
    afterNextRender(() => {
      this.githubService.getLastCommitDate().subscribe({
        next: (date) => this.lastUpdateDate.set(date)
      });
    });
    router.events.subscribe((event) => {  // fires on every URL change
      this.setTitle(this.getTitleFromRouter(router));
      if (event instanceof NavigationEnd && this.pendingPrimary) {
        const selected = this.pendingPrimary;
        this.pendingPrimary = undefined;
        if (event.urlAfterRedirects.startsWith(selected)) {
          this.menuOpen.set(false);
          setTimeout(() => this.contentStart?.nativeElement.focus());
        }
      } else if (event instanceof NavigationCancel || event instanceof NavigationError) {
        this.pendingPrimary = undefined;
        if (event instanceof NavigationError) this.reloadIfChunkMissing(event);
      }
      if (router.url !== '/') {
        // this.isDonationBannerShown = false;

      }
    });
  }

  // Runs when the layout crosses 992px. CSS may already have hidden, and so blurred, the focused control.
  private onViewportCrossing(wide: boolean): void {
    const focused = this.viewport.focusedAtCrossing();
    const inNavigation = !!focused?.closest('.primary-nav');
    const inTrigger = !!focused?.closest('.menu-trigger');
    const inUtility = !!focused?.closest('.compact-utilities, .header-actions');
    const utilityClass = focused?.closest('.cv-link') ? 'cv-link' : focused?.closest('.dark-mode-button') ? 'dark-mode-button' : null;
    const compact = !wide;
    this.menuOpen.set(false);
    if ((compact && (inNavigation || inUtility)) || (!compact && (inTrigger || inUtility))) {
      // The targets are always in the DOM (CSS chooses what shows), so a macrotask is enough. No Angular
      // render follows a crossing here, because the template no longer reads the viewport.
      setTimeout(() => {
        const target = !compact && utilityClass
          ? this.document.querySelector<HTMLElement>(`.header-actions .${utilityClass}`)
          : compact
            ? this.document.querySelector<HTMLElement>('.menu-trigger')
            : this.document.querySelector<HTMLElement>('.primary-nav .menu-item');
        target?.focus();
      });
    }
  }

}

