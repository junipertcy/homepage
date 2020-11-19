import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/** icons **/
import { IconDefinition } from '@ant-design/icons-angular';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd/icon';
import {
  ShareAltOutline,
  BookOutline,
  DownloadOutline,
  ReadOutline,
  LaptopOutline
} from '@ant-design/icons-angular/icons';

import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { NewsComponent } from './news/news.component';
import { PublicationsComponent } from './publications/publications.component';
import { TeachingComponent } from './teaching/teaching.component';
import { Str2urlPipe } from './str2url.pipe';
import { TalksComponent } from './talks/talks.component';
import { ActivitiesComponent } from './activities/activities.component';

const icons: IconDefinition[] = [ ShareAltOutline, BookOutline, DownloadOutline, ReadOutline, LaptopOutline ];

/** angular i18n **/
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
registerLocaleData(en);

const appRoutes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'talks', component: TalksComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'teaching', component: TeachingComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    Str2urlPipe,
    PublicationsComponent,
    TeachingComponent,
    TalksComponent,
    ActivitiesComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,  // <-- debugging purposes only
        useHash: false}
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    NgbModule,
    FontAwesomeModule,  // ng-bootstrap
  ],
  providers: [
    Title,
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' },
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [
    AppComponent
  ],
  exports: []
})
export class AppModule { }
