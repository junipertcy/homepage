import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-cu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzDividerModule
  ],
  templateUrl: './cu.component.html',
  styleUrls: [
    './cu.component.css',
  ]
})
export class CuComponent {

}
