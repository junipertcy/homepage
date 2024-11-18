import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './cu.component.html',
  styleUrls: [
    './cu.component.css', 
  ]
})
export class CuComponent {

}
