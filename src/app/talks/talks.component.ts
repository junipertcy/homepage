import { Component, OnInit } from '@angular/core';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { Str2urlPipe } from '../@pipes/str2url.pipe';


@Component({
  selector: 'app-talks',
  standalone: true,
  imports: [NzTagModule, Str2urlPipe],
  templateUrl: './talks.component.html',
  styleUrls: [
    './talks.component.css',
  ]
})
export class TalksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// Useful things if I got to teach the same class next time
// https://clig.dev/
