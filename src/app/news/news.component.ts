import { Component } from '@angular/core';
import { NzSelectSizeType } from 'ng-zorro-antd/select';
import * as d3 from 'd3';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css', '../app.component.css'],
})
export class NewsComponent {
  // date = null;
  // onChange(result: Date): void {
  //   console.log('onChange: ', result);
  // }
  thisYear = '2024';
  selectSize: NzSelectSizeType = 'small';

  // URLs
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

  constructor() {
  }

  ngAfterContentChecked() {
    // For the years
    d3.selectAll('.ant-select-item-option-content')
      .style('font-family', 'concourse_4_caps')
      .style('font-size', '1rem');
    // d3.selectAll("nz-option-item").on("mouseover", (event) => {console.log(event, this);})
    // d3.selectAll("nz-option-item").attr("onItemHover", );
  }
}
