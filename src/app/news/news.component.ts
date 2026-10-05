import { Component, ChangeDetectionStrategy, OnDestroy, ElementRef, ViewChild, NgZone } from '@angular/core';
import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons';
import { faRefresh, faArrowDown91 } from '@fortawesome/free-solid-svg-icons';
import { ReloadService } from '../@services/reload.service';

@Component({
  selector: 'app-news',
  standalone: false,
  templateUrl: './news.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnDestroy {
  @ViewChild('researchStart') researchStart?: ElementRef<HTMLElement>;
  isCompact: boolean;
  private viewport: MediaQueryList;
  private readonly onViewportChange = (event: MediaQueryListEvent) => this.zone.run(() => {
    const regenerationFocused = !!document.activeElement?.closest('.regenerate-button');
    this.isCompact = !event.matches;
    if (regenerationFocused && this.isCompact) setTimeout(() => this.researchStart?.nativeElement.focus());
  });
  // date = null;
  // onChange(result: Date): void {
  //   console.log('onChange: ', result);
  // }
  faSquareUpRight = faSquareUpRight;
  faRefresh = faRefresh;
  faArrowDown91 = faArrowDown91;
  thisYear = '2026';
  // selectSize: NzSelectModeType = 'large';

  // URLs
  dan = 'https://larremorelab.github.io/dan/';
  josh = 'https://home.cs.colorado.edu/~jgrochow/index.html';
  wiki_stat_inf = 'https://en.wikipedia.org/wiki/Statistical_inference';
  wiki_tda = 'https://en.wikipedia.org/wiki/Topological_data_analysis';
  wiki_cs = 'https://en.wikipedia.org/wiki/Complex_system';
  wiki_css = 'https://en.wikipedia.org/wiki/Computational_social_science';
  wiki_sp = 'https://en.wikipedia.org/wiki/Stochastic_process';
  wiki_c = 'https://en.wikipedia.org/wiki/Combinatorics';

  wiki_cvx = 'https://en.wikipedia.org/wiki/Convex_optimization';
  wiki_disc = 'https://en.wikipedia.org/wiki/Combinatorial_optimization';

  wiki_a = 'https://en.wikipedia.org/wiki/Algorithm';

  acda21 = 'https://www.siam.org/conferences/cm/conference/acda21';
  acda21_intro_blitz =
    'https://filen.io/d/ca106796-992f-4d79-8f4b-3affa248246a#!Q6jEtVdTJrsNPNqxE9tff9oJvOqXcYBM';
  isit21 = 'https://2021.ieee-isit.org/';
  networks21 = 'https://networks2021.net/';

  // Files
  resume_file_2024 = '../../assets/pdf/older/Yen_Resume_Oct_2024.pdf';

  // research interests
  misc_1 = 'https://arxiv.org/abs/2402.08871';

  constructor(private reloadService: ReloadService, private zone: NgZone) {
    this.viewport = window.matchMedia('(min-width: 992px)');
    this.isCompact = !this.viewport.matches;
    this.viewport.addEventListener('change', this.onViewportChange);
  }

  ngOnDestroy(): void {
    this.viewport.removeEventListener('change', this.onViewportChange);
  }
  reloadPattern() {
    this.reloadService.triggerReload('gpr');
    this.reloadService.triggerReload('pixel');
    this.reloadService.triggerReload('simplex');
  }

}
