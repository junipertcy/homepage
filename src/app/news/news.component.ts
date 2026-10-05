import { Component, ElementRef, ViewChild, DestroyRef, Injector, afterNextRender, inject } from '@angular/core';
import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons';
import { faRefresh, faArrowDown91 } from '@fortawesome/free-solid-svg-icons';
import { ReloadService } from '../@services/reload.service';
import { ViewportService } from '../@services/viewport.service';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { Str2urlPipe } from '../@pipes/str2url.pipe';
import { SimplexComponent } from '../@components/simplex/simplex.component';
import { GprComponent } from '../@components/gpr/gpr.component';
import { PixelPatternComponent } from '../@components/pixel-pattern/pixel-pattern.component';

@Component({
  selector: 'app-news',
  imports: [FormsModule, FontAwesomeModule, NzDividerModule, NzGridModule, NzSelectModule, Str2urlPipe, SimplexComponent, GprComponent, PixelPatternComponent],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  @ViewChild('researchStart') researchStart?: ElementRef<HTMLElement>;
  private readonly viewport = inject(ViewportService);
  private readonly injector = inject(Injector);
  readonly isWide = this.viewport.isWide;
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

  constructor(private reloadService: ReloadService) {
    // Runs when the layout crosses 992px. CSS may already have hidden, and so blurred, the regeneration button.
    this.viewport.onCrossing(wide => {
      const regenerationFocused = !!this.viewport.focusedAtCrossing()?.closest('.regenerate-button');
      if (regenerationFocused && !wide) afterNextRender(() => this.researchStart?.nativeElement.focus(), { injector: this.injector });
    }, inject(DestroyRef));
  }
  reloadPattern() {
    this.reloadService.triggerReload('gpr');
    this.reloadService.triggerReload('pixel');
    this.reloadService.triggerReload('simplex');
  }

}
