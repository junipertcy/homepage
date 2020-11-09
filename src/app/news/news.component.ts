import {Component} from '@angular/core';
import {faMastodon} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent {
  // date = null;
  // onChange(result: Date): void {
  //   console.log('onChange: ', result);
  // }
  thisYear = '2020';
  faMastodon = faMastodon;

  constructor() {
  }
}
