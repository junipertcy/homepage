import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-cu',
  standalone: true,
  imports: [
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
