import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SimplexComponent } from './@components/simplex/simplex.component';
import { GprComponent } from './@components/gpr/gpr.component';
import { PixelPatternComponent } from './@components/pixel-pattern/pixel-pattern.component';

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
  LaptopOutline,
} from '@ant-design/icons-angular/icons';

import { NewsComponent } from './news/news.component';
import { PublicationsComponent } from './publications/publications.component';
import { TeachingComponent } from './teaching/teaching.component';
import { ErrorComponent } from './error/error.component';
import { TalksComponent } from './talks/talks.component';
import { ActivitiesComponent } from './activities/activities.component';

import { InternalUriResolverPipe } from './@pipes/internal-uri-resolver.pipe';
import { Str2urlPipe } from './@pipes/str2url.pipe';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
const icons: IconDefinition[] = [
  ShareAltOutline,
  BookOutline,
  DownloadOutline,
  ReadOutline,
  LaptopOutline,
];

/** angular i18n **/
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CllinComponent } from './cllin/cllin.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TextbooksComponent } from './textbooks/textbooks.component';
import { ReadingComponent } from './reading/reading.component';
import { NotesComponent } from './notes/notes.component';
import { BooksComponent } from './books/books.component';
import { NotionComponent } from './notion/notion.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AboutComponent } from './about/about.component';
registerLocaleData(en);

const appRoutes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'about', component: AboutComponent},
  {
    path: 'activities',
    component: ActivitiesComponent,
    children: [
      {
        path: '',
        redirectTo: 'sem',
        pathMatch: 'full'
      },
      {
        path: 'sem',
        loadComponent: () => import('./activities/sem/sem.component').then(m => m.SemComponent)
      },
      {
        path: 'workshop',
        loadComponent: () => import('./activities/workshop/workshop.component').then(m => m.WorkshopComponent)
      },
      {
        path: 'ref',
        loadComponent: () => import('./activities/ref/ref.component').then(m => m.RefComponent)
      },
      {
        path: 'pers',
        loadComponent: () => import('./activities/pers/pers.component').then(m => m.PersComponent)
      },
      {
        path: 'tw',
        loadComponent: () => import('./activities/tw/tw.component').then(m => m.TwComponent)
      },
      {
        path: 'inact',
        loadComponent: () => import('./activities/inact/inact.component').then(m => m.InactComponent)
      }
    ]
  },
  { path: 'books', component: BooksComponent },
  { path: 'cllin', component: CllinComponent },
  { path: 'notion', component: NotionComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'reading', component: ReadingComponent },
  { path: 'textbooks', component: TextbooksComponent },
  { path: 'talks', component: TalksComponent },
  {
    path: 'teaching',
    component: TeachingComponent,
    children: [
      {
        path: '',
        redirectTo: 'cu',
        pathMatch: 'full'
      },
      {
        path: 'cu',
        loadComponent: () => import('./teaching/cu/cu.component').then(m => m.CuComponent)
      },
      {
        path: '2270',
        loadComponent: () => import('./teaching/cu/2270/2270.component').then(m => m.TeachingComponent2270)
      },
      {
        path: '3308',
        loadComponent: () => import('./teaching/cu/3308/3308.component').then(m => m.TeachingComponent3308)
      },
      {
        path: '5352',
        loadComponent: () => import('./teaching/cu/5352/5352.component').then(m => m.TeachingComponent5352)
      },
      {
        path: '5822',
        loadComponent: () => import('./teaching/cu/5822/5822.component').then(m => m.TeachingComponent5822)
      },
      {
        path: 'tw',
        loadComponent: () => import('./teaching/tw/tw.component').then(m => m.TwComponent)
      },
      {
        path: 'resources',
        loadComponent: () => import('./teaching/resources/resources.component').then(m => m.ResourcesComponent)
      }
    ]
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CllinComponent,
    NewsComponent,
    NotesComponent,
    PrivacyComponent,
    PublicationsComponent,
    ReadingComponent,
    TextbooksComponent,
    TalksComponent,
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    NotionComponent,
    NgbModule,
    NgZorroAntdModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: true,
      useHash: false,
    }),
    InternalUriResolverPipe,
    SimplexComponent,
    GprComponent,
    PixelPatternComponent,
    Str2urlPipe,
    MatIconModule,  // dark mode icon
  ],
  providers: [
    Title,
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule { }
