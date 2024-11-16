import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDividerModule } from 'ng-zorro-antd/divider';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  imports: [
    NzAvatarModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzDropDownModule,
    RouterModule, 
    NzGridModule,
    NzIconModule,
    NzNoAnimationModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzTagModule,
    NzTypographyModule,
    NzDividerModule
  ],
  standalone: true,
  styleUrls: ['./activities.component.css']
})

export class ActivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
