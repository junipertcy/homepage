import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/** Material **/
// import { MatProgressBarModule } from '@angular/material/progress-bar';

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


import { NewsComponent } from './news/news.component';
import { PublicationsComponent } from './publications/publications.component';
import { TeachingComponent } from './teaching/teaching.component';
import { ErrorComponent } from './error/error.component';
import { TeachingComponent2270 } from './teaching/2270/2270.component';
import { TeachingComponent3308 } from './teaching/3308/3308.component';
import { TeachingComponent5822 } from './teaching/5822/5822.component';
import { TeachingComponent5352 } from './teaching/5352/5352.component';
import { TalksComponent } from './talks/talks.component';
import { ActivitiesComponent } from './activities/activities.component';

import { Str2urlPipe } from './str2url.pipe';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
const icons: IconDefinition[] = [ ShareAltOutline, BookOutline, DownloadOutline, ReadOutline, LaptopOutline ];

/** angular i18n **/
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CllinComponent } from './cllin/cllin.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ResourcesComponent } from './resources/resources.component';
import { ReadingComponent } from './reading/reading.component';
import { NotesComponent } from './notes/notes.component';
import { BooksComponent } from './books/books.component';
registerLocaleData(en);

const appRoutes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'talks', component: TalksComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'teaching', component: TeachingComponent },
  { path: 'teaching/2270', component: TeachingComponent2270 },
  { path: 'teaching/3308', component: TeachingComponent3308 },
  { path: 'teaching/5822', component: TeachingComponent5822 },
  { path: 'teaching/5352', component: TeachingComponent5352 },
  { path: 'cllin', component: CllinComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'reading', component: ReadingComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'books', component: BooksComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    Str2urlPipe,
    PublicationsComponent,
    TeachingComponent,
    TeachingComponent2270,
    TeachingComponent3308,
    TeachingComponent5822,
    TeachingComponent5352,
    TalksComponent,
    ActivitiesComponent,
    CllinComponent,
    PrivacyComponent,
    ResourcesComponent,
    ReadingComponent,
    NotesComponent,
    BooksComponent,
  ],
  imports: [
    NgZorroAntdModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      {
    enableTracing: true,
    useHash: false
}
    ),
    // MatProgressBarModule,
    // ng-bootstrap
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
