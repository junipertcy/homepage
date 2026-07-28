import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-reading',
  standalone: true,
  templateUrl: './reading.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
