import { Component, OnInit } from '@angular/core';
import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-cllin',
  standalone: true,
  imports: [NzImageModule],
  templateUrl: './cllin.component.html',
  styleUrls: ['./cllin.component.css']
})
export class CllinComponent implements OnInit {

  cllin_wiki = 'https://en.wikipedia.org/wiki/Ching-Liang_Lin';
  cllin_wiki_tw = 'https://zh.wikipedia.org/wiki/%E6%9E%97%E6%B8%85%E5%87%89';
  cllin_img = '/assets/img/cllin/cllin_2014.jpeg';
  cllin_memoir = '/assets/img/cllin/cllin_memoir.jpeg';
  cllin_notes_1 = '/assets/img/cllin/cllin_notes_1.jpg';
  cllin_notes_2 = '/assets/img/cllin/cllin_notes_2.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
