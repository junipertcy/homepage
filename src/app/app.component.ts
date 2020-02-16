import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  isCollapsed = false;
  screenHeight: number;
  // screenWidth: number;

  logoClick = function () {
    // this.router.navigateByUrl('/network/fish');
    document.querySelectorAll('li.ant-menu-item-selected').forEach(function (e) {
      e.setAttribute('class', 'ant-menu-item');
    });
  };

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getTitleFromRouter = function (router: Router) {
    for (const r of router.config) {
      if ('/' + r.path === router.url) {
        return r.data ? r.data.title : 'Tzu-Chi Yen';
      }
    }
  };

  constructor(private router: Router, private titleService: Title) {
    this.getScreenSize();
    router.events.subscribe((event) => {  // fires on every URL change
      console.log(router);
      this.setTitle(this.getTitleFromRouter(router));
    });
  }

  // https://stackoverflow.com/questions/39888768
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight - 10 - 64 - 70;
    // this.screenWidth = window.innerWidth;
    // console.log(this.screenHeight, this.screenWidth);
  }
}

