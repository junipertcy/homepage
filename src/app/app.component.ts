import { Component, OnInit, Inject, HostListener } from '@angular/core';

import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DOCUMENT } from '@angular/common';
import * as DarkReader from 'darkreader';


// To make the update time dynamic based on my last GitHub push
import { GithubService } from './@services/github.service';

@Component({
  selector: 'app-root',
  standalone: false,
  providers: [NzModalService, Title],
  templateUrl: './app.component.html',
  styleUrls: [
    '../styles/font-face.css',
    './app.component.css',
  ]
})

export class AppComponent implements OnInit {

  title = 'app';
  screenHeight: number = 0;
  // isDonationBannerShown = true;
  isLoaded = false;
  isCollapsed = false;
  cv_file = "../../assets/pdf/Tzu-Chi_Yen_CV.pdf";
  resume_file = "../../assets/pdf/Tzu-Chi_Yen_Resume.pdf";
  // screenWidth: number;
  lastUpdateDate!: string;
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getTitleFromRouter = function (router: Router) {
    for (const r of router.config) {
      if (router.url.split('/').length > 2 && r.path === router.url.split('/')[1]) {
        return r.data ? r.data['title'] : 'TCY | ' + r.path + ' | ' + router.url.split('/')[2];
      }
      if ('/' + r.path === router.url) {
        if (r.path === '') {
          return 'Tzu-Chi Yen';
        }  // Feb 5, 24: Strange. I cannot use "else" to simplify the code.
        return r.data ? r.data['title'] : 'TCY | ' + r.path;
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


  isDarkMode: boolean;
  hover: boolean = false;
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    this.applyDarkMode();
  }

  private applyDarkMode(): void {
    if (this.isDarkMode) {
      DarkReader.enable({
        brightness: 100,
        contrast: 90,
        sepia: 10
      });
    } else {
      DarkReader.disable();
    }
  }

  constructor(
    private githubService: GithubService,
    private router: Router,
    private titleService: Title,
    private officeInfoModal: NzModalService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    this.applyDarkMode();
    this.getScreenSize(); // Call the method without arguments
    router.events.subscribe((event) => {  // fires on every URL change
      this.setTitle(this.getTitleFromRouter(router));
      if (router.url !== '/') {
        // this.isDonationBannerShown = false;

      }
    });
  }

  // A hot fix for the homepage which renders prematurely
  ngOnInit(): void {
    setTimeout(() => { this.isLoaded = true; }, 500);

    this.githubService.getLastCommitDate().subscribe({
      next: (date) => this.lastUpdateDate = date,
      error: (error) => console.error('Error fetching last commit date:', error),
      complete: () => console.log('Last commit date fetch completed')
    });


  }

}

