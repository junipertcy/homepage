import {Component, HostListener} from '@angular/core';
import {faMastodon, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css', '../../../node_modules/academicons/css/academicons.min.css'],
})

export class NewsComponent {
  // date = null;
  // onChange(result: Date): void {
  //   console.log('onChange: ', result);
  // }
  thisYear = '2021';
  faMastodon = faMastodon;
  faGithub = faGithub;
  faTwitter = faTwitter;


  // URLs
  wiki_stat_inf = 'https://en.wikipedia.org/wiki/Statistical_inference';
  wiki_tda = 'https://en.wikipedia.org/wiki/Topological_data_analysis';
  wiki_comp_sys = 'https://en.wikipedia.org/wiki/Complex_system';
  wiki_css = 'https://en.wikipedia.org/wiki/Computational_social_science';

  ssd_eff = 'https://ssd.eff.org/en/module/communicating-others';

  acda21 = 'https://www.siam.org/conferences/cm/conference/acda21';
  isit21 = 'https://2021.ieee-isit.org/';
  networks21 = 'https://networks2021.net/';


  constructor() {
  }
}
