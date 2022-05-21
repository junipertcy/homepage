import {Component, HostListener} from '@angular/core';
import {NzSelectSizeType} from 'ng-zorro-antd/select';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})

export class NewsComponent {
  // date = null;
  // onChange(result: Date): void {
  //   console.log('onChange: ', result);
  // }
  thisYear = '2022';
  selectSize: NzSelectSizeType = 'default';

  // URLs
  wiki_stat_inf = 'https://en.wikipedia.org/wiki/Statistical_inference';
  wiki_tda = 'https://en.wikipedia.org/wiki/Topological_data_analysis';
  wiki_comp_sys = 'https://en.wikipedia.org/wiki/Complex_system';
  wiki_css = 'https://en.wikipedia.org/wiki/Computational_social_science';
  wiki_sp = 'https://en.wikipedia.org/wiki/Stochastic_process';
  wiki_c = 'https://en.wikipedia.org/wiki/Combinatorics';
  wiki_a = 'https://en.wikipedia.org/wiki/Algorithm';

  acda21 = 'https://www.siam.org/conferences/cm/conference/acda21';
  acda21_intro_blitz = 'https://filen.io/d/ca106796-992f-4d79-8f4b-3affa248246a#!Q6jEtVdTJrsNPNqxE9tff9oJvOqXcYBM';
  isit21 = 'https://2021.ieee-isit.org/';
  networks21 = 'https://networks2021.net/';


  constructor() {
  }
}
