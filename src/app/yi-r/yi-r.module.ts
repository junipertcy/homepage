import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { YiRDetailComponent } from './yi-r-detail/yi-r-detail.component';

import { YiRRoutingModule } from './yi-r-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    YiRRoutingModule
  ],
  declarations: [
    YiRDetailComponent
  ]
})
export class YiRModule {}
