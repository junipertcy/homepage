import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  isCollapsed = false;
  logoClick = function () {
    // this.router.navigateByUrl('/network/fish');
    document.querySelectorAll('li.ant-menu-item-selected').forEach(function (e) {
      e.setAttribute('class', 'ant-menu-item');
    });
  };

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  getTitleFromRouter = function( router: Router) {
    for (const r of router.config) {
      if ('/' + r.path === router.url) {
        return r.data ? r.data.title : 'Tzu-Chi Yen';
      }
    }
  };

  constructor(private router: Router, private titleService: Title) {
    router.events.subscribe((event) => {  // fires on every URL change
      console.log(router);
      this.setTitle(this.getTitleFromRouter(router));
    });
  }
}

