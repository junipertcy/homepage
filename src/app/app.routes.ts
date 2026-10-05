import { Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
  {
    path: 'activities',
    loadComponent: () => import('./activities/activities.component').then(m => m.ActivitiesComponent),
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
  { path: 'books', loadComponent: () => import('./books/books.component').then(m => m.BooksComponent) },
  { path: 'cllin', loadComponent: () => import('./cllin/cllin.component').then(m => m.CllinComponent) },
  { path: 'notion', loadComponent: () => import('./notion/notion.component').then(m => m.NotionComponent) },
  { path: 'privacy', loadComponent: () => import('./privacy/privacy.component').then(m => m.PrivacyComponent) },
  { path: 'publications', loadComponent: () => import('./publications/publications.component').then(m => m.PublicationsComponent) },
  { path: 'reading', loadComponent: () => import('./reading/reading.component').then(m => m.ReadingComponent) },
  { path: 'textbooks', loadComponent: () => import('./textbooks/textbooks.component').then(m => m.TextbooksComponent) },
  { path: 'talks', loadComponent: () => import('./talks/talks.component').then(m => m.TalksComponent) },
  {
    path: 'teaching',
    loadComponent: () => import('./teaching/teaching.component').then(m => m.TeachingComponent),
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
