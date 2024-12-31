import { Component } from '@angular/core';
import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons';
import { faRefresh, faArrowDown91 } from '@fortawesome/free-solid-svg-icons';
import { ReloadService } from '../@services/reload.service';

import * as d3 from 'd3';

@Component({
  selector: 'app-news',
  standalone: false,
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  // date = null;
  // onChange(result: Date): void {
  //   console.log('onChange: ', result);
  // }
  faSquareUpRight = faSquareUpRight;
  faRefresh = faRefresh;
  faArrowDown91 = faArrowDown91;
  thisYear = '2025';
  // selectSize: NzSelectModeType = 'large';

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

  // Files
  resume_file_2024 = '../../assets/pdf/older/Yen_Resume_Oct_2024.pdf';

  // research interests
  misc_1 = 'https://arxiv.org/abs/2402.08871';

  constructor(private reloadService: ReloadService) { }
  reloadPattern() {
    this.reloadService.triggerReload('gpr');
    this.reloadService.triggerReload('pixel');
    this.reloadService.triggerReload('simplex');
  }

  ngAfterContentChecked() {
    // For the years
    d3.selectAll('.ant-select-item-option-content')
      .style('font-family', 'concourse_4_caps')
      .style('font-size', '1rem');
    // d3.selectAll("nz-option-item").on("mouseover", (event) => {console.log(event, this);})
    // d3.selectAll("nz-option-item").attr("onItemHover", );

    d3.selectAll('.ant-select-selector')
      // .style('display', 'flex !important')
      // .style('fjustify-content', 'flex-end !important')
      .style('margin-left', '10pt');
  }

}
