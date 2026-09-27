import { Component, OnInit, OnDestroy, Inject, ChangeDetectionStrategy, ElementRef, ViewChild, NgZone } from '@angular/core';

import { Router, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DOCUMENT } from '@angular/common';


// To make the update time dynamic based on my last GitHub push
import { GithubService } from './@services/github.service';

@Component({
  selector: 'app-root',
  standalone: false,
  providers: [NzModalService, Title],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: [
    './app.component.css',
  ]
})

export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('contentStart') contentStart?: ElementRef<HTMLElement>;
  isCompact: boolean;
  menuOpen = false;
  private viewport: MediaQueryList;
  private pendingPrimary?: string;
  private readonly onViewportChange = (event: MediaQueryListEvent) => this.zone.run(() => {
    const focused = this.document.activeElement as HTMLElement | null;
    const inNavigation = !!focused?.closest('.primary-nav');
    const inTrigger = !!focused?.closest('.menu-trigger');
    const inUtility = !!focused?.closest('.compact-utilities, .header-actions');
    const utilityClass = focused?.closest('.cv-link') ? 'cv-link' : focused?.closest('.dark-mode-button') ? 'dark-mode-button' : null;
    this.isCompact = !event.matches;
    this.menuOpen = false;
    if ((this.isCompact && (inNavigation || inUtility)) || (!this.isCompact && (inTrigger || inUtility))) {
      setTimeout(() => {
        const target = !this.isCompact && utilityClass
          ? this.document.querySelector<HTMLElement>(`.header-actions .${utilityClass}`)
          : this.isCompact
            ? this.document.querySelector<HTMLElement>('.menu-trigger')
            : this.document.querySelector<HTMLElement>('.primary-nav .menu-item');
        target?.focus();
      });
    }
  });

  title = 'app';
  // isDonationBannerShown = true;
  isLoaded = true;
  cv_file = "../../assets/pdf/Tzu-Chi_Yen_CV.pdf";
  resume_file = "../../assets/pdf/Tzu-Chi_Yen_Resume.pdf";
  lastUpdateDate!: string;
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

  isDarkMode: boolean;
  hover: boolean = false;

  closeMenu(event: Event): void {
    if (!this.menuOpen) return;
    event.preventDefault();
    event.stopPropagation();
    this.menuOpen = false;
    this.document.querySelector<HTMLElement>('.menu-trigger')?.focus();
  }

  selectPrimary(event: MouseEvent, path: string): void {
    if (!this.isCompact || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (this.router.url === path) {
      this.menuOpen = false;
      setTimeout(() => this.contentStart?.nativeElement.focus());
    } else {
      this.pendingPrimary = path;
    }
  }
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    this.applyDarkMode();
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
  }

  constructor(
    private githubService: GithubService,
    public router: Router,
    private titleService: Title,
    private officeInfoModal: NzModalService,
    private zone: NgZone,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.viewport = this.document.defaultView!.matchMedia('(min-width: 992px)');
    this.isCompact = !this.viewport.matches;
    this.viewport.addEventListener('change', this.onViewportChange);
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    this.applyDarkMode();
    router.events.subscribe((event) => {  // fires on every URL change
      this.setTitle(this.getTitleFromRouter(router));
      if (event instanceof NavigationEnd && this.pendingPrimary) {
        const selected = this.pendingPrimary;
        this.pendingPrimary = undefined;
        if (event.urlAfterRedirects.startsWith(selected)) {
          this.menuOpen = false;
          setTimeout(() => this.contentStart?.nativeElement.focus());
        }
      } else if (event instanceof NavigationCancel || event instanceof NavigationError) {
        this.pendingPrimary = undefined;
      }
      if (router.url !== '/') {
        // this.isDonationBannerShown = false;

      }
    });
  }

  ngOnDestroy(): void {
    this.viewport.removeEventListener('change', this.onViewportChange);
  }

  ngOnInit(): void {
    this.githubService.getLastCommitDate().subscribe({
      next: (date) => this.lastUpdateDate = date
    });


  }

}

