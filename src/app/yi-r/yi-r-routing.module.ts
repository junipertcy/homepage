import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { YiRDetailComponent } from './yi-r-detail/yi-r-detail.component';

const YiRRoutes: Routes = [
  { path: 'YiR/:year', component: YiRDetailComponent, data: { animation: 'YiR' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(YiRRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class YiRRoutingModule { }
