import { Component, ChangeDetectionStrategy } from '@angular/core';

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
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: [
    './cu.component.css',
  ]
})
export class CuComponent {

}
