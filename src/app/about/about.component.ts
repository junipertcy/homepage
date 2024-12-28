import { Component } from '@angular/core';
import { faBluesky } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule, NzIconModule, NzSpaceModule, NzGridModule, NzDividerModule],
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.css',
    '../../../node_modules/academicons/css/academicons.min.css',
  ]
})
export class AboutComponent {
  faBluesky = faBluesky;

  url_li = 'https://www.linkedin.com/in/tzuchiy/';
  url_gh = 'https://github.com/junipertcy';
  url_bsky = 'https://bsky.app/profile/tcyen.bsky.social';
  url_x = 'https://twitter.com/oneofyen';
  url_gs = 'https://scholar.google.com/citations?user=ZUxl-r0AAAAJ&hl=en&sortby=pubdate';
  url_wos = 'https://www.webofscience.com/wos/author/record/ABE-6509-2020';
}
