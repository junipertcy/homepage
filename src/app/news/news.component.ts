import {Component} from '@angular/core';
import APP_CONFIG from '../app.config';

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
  thisYear = "2020";
  constructor() {
  }
}
