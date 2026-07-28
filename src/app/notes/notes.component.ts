import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-notes',
  standalone: true,
  templateUrl: './notes.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
