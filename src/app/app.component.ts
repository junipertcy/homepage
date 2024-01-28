import {Component, TemplateRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {HostListener} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    '../styles/font-face.css',
    '../../node_modules/academicons/css/academicons.min.css',
    './app.component.css',
  ]
})

export class AppComponent implements OnInit {
  title = 'app';
  isCollapsed = false;
  screenHeight: number = 0;
  isDonationBannerShown = true;
  isLoaded = false;
  cv_file = "../../assets/pdf/Tzu-Chi_Yen_CV.pdf";
  // screenWidth: number;

  createTplModal(
    tplTitle: TemplateRef<{}>,
    tplContent: TemplateRef<{}>,
    tplFooter: TemplateRef<{}>): void {
    this.officeInfoModal.create({
      // nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzOnOk: () => console.log('Click ok')
    });
  }

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
        return r.data ? r.data['title'] : 'Tzu-Chi Yen';
      }
    }
  };

  // https://stackoverflow.com/questions/39888768
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    // 64px: header height; 70px: footer height; 40px: banner row;
    this.screenHeight = window.innerHeight - 64 - 70 - 40;
    // this.screenWidth = window.innerWidth;
    // console.log(this.screenHeight, this.screenWidth);
  }

  constructor(private router: Router,
              private titleService: Title,
              private officeInfoModal: NzModalService
  ) {
    this.getScreenSize(); // Call the method without arguments
    router.events.subscribe((event) => {  // fires on every URL change
      if (router.url !== '/') {
        this.isDonationBannerShown = false;
      }
      this.setTitle(this.getTitleFromRouter(router));
    });
  }

  // A hot fix for the homepage which renders prematurely
  ngOnInit() {
    setTimeout(() => {this.isLoaded = true; }, 500);
  }

}

