import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  // <-- Import CommonModule for ngClass and other common directives
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
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  imports: [
    CommonModule,
    RouterModule,
    NzAvatarModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzDropDownModule,
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
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {

  isCUActive = false; // Boolean to track if CU should be highlighted

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Subscribe to router events to detect route changes
    this.router.events.subscribe(() => {
      this.checkIfCuIsActive();
    });

    // Initial check when component loads
    this.checkIfCuIsActive();
  }

  checkIfCuIsActive(): void {
    const cuClassRoutes = ['2270', '3308', '5352', '5822'];
    
    // Get the current child route under /teaching
    const currentRoute = this.activatedRoute.firstChild?.snapshot.url[0]?.path;
    
    // Check if it's one of CU's classes or CU itself
    this.isCUActive = currentRoute ? cuClassRoutes.includes(currentRoute) || currentRoute === 'cu' : false;
  }
}
