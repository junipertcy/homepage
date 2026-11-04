import { Component, signal } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { Str2urlPipe } from '../@pipes/str2url.pipe';

@Component({
  selector: 'app-news',
  imports: [NzDividerModule, NzGridModule, Str2urlPipe],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  // date = null;
  // onChange(result: Date): void {
  //   console.log('onChange: ', result);
  // }
  // selectSize: NzSelectModeType = 'large';

  // News years, newest first. The first is shown on load; each needs a matching
  // `<div class="news-year">` block in the template.
  years = ['2026', '2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018'];
  year = signal(this.years[0]);

  // URLs
  dan = 'https://larremorelab.github.io/dan/';
  josh = 'https://home.cs.colorado.edu/~jgrochow/index.html';
  becker = 'https://stephenbeckr.github.io/';
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
  isit21 = '/bokhi/isit2021';
  networks21 = '/bokhi/networks2021';

  // Files
  resume_file_2024 = '../../assets/pdf/older/Yen_Resume_Oct_2024.pdf';

}
