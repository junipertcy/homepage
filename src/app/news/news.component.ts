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

  constructor() {
  }
}
