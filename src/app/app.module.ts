import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_TW } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/** icons **/
import { IconDefinition } from '@ant-design/icons-angular';
import { NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd';
import {
  ShareAltOutline,
  BookOutline,
  DownloadOutline,
  ReadOutline,
  LaptopOutline
} from '@ant-design/icons-angular/icons';

import { NewsComponent } from './news/news.component';
import { ResearchComponent } from './research/research.component';
import { PublicationsComponent } from './publications/publications.component';
import { TeachingComponent } from './teaching/teaching.component';
import { Str2urlPipe } from './str2url.pipe';
import { TalksComponent } from './talks/talks.component';
import { ActivitiesComponent } from './activities/activities.component';


const icons: IconDefinition[] = [ ShareAltOutline, BookOutline, DownloadOutline, ReadOutline, LaptopOutline ];

/** angular i18n **/
// import { registerLocaleData } from '@angular/common';
// import zh from '@angular/common/locales/zh';
// registerLocaleData(zh);

const appRoutes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'talks', component: TalksComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'teaching', component: TeachingComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    Str2urlPipe,
    ResearchComponent,
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
    NgbModule,  // ng-bootstrap
  ],
  providers: [
    Title,
    { provide: NZ_I18N, useValue: zh_TW },
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' },
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
