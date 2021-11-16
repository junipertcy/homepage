import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cllin',
  templateUrl: './cllin.component.html',
  styleUrls: ['./cllin.component.css']
})
export class CllinComponent implements OnInit {

  cllin_wiki = 'https://en.wikipedia.org/wiki/Ching-Liang_Lin';
  cllin_wiki_tw = 'https://zh.wikipedia.org/wiki/%E6%9E%97%E6%B8%85%E5%87%89';
  cllin_img = 'https://bag.netscied.tw/apps/files_sharing/publicpreview/N2236y45LaeiQ9N?x=3284&y=2816&a=true&file=Cllin_2014.jpeg&scalingup=0';

  constructor() { }

  ngOnInit(): void {
  }

}
