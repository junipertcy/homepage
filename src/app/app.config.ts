import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { IconDefinition } from '@ant-design/icons-angular';
import {
  BookOutline,
  CodeOutline,
  EditFill,
  GiftFill,
  GithubOutline,
  LeftSquareFill,
  LinkOutline,
  LinkedinOutline,
  LockOutline,
  MailOutline,
  MoreOutline,
  RightSquareOutline,
  TwitterOutline,
} from '@ant-design/icons-angular/icons';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { routes } from './app.routes';

// Every icon a template names, registered up front: no per-icon HTTP request at runtime, and the
// icons are present in prerendered HTML. NG-ZORRO registers the ones its own components draw.
const icons: IconDefinition[] = [
  BookOutline,
  CodeOutline,
  EditFill,
  GiftFill,
  GithubOutline,
  LeftSquareFill,
  LinkOutline,
  LinkedinOutline,
  LockOutline,
  MailOutline,
  MoreOutline,
  RightSquareOutline,
  TwitterOutline,
];

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })),
    provideHttpClient(),
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
  ]
};
