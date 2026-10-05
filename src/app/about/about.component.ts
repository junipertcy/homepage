import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { IconComponent } from '../@components/icon/icon.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NzIconModule, NzGridModule, IconComponent],
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.css',
  ]
})
export class AboutComponent {
  url_li = 'https://www.linkedin.com/in/tzuchiy/';
  url_gh = 'https://github.com/junipertcy';
  url_bsky = 'https://bsky.app/profile/tcyen.bsky.social';
  url_x = 'https://twitter.com/oneofyen';
  url_gs = 'https://scholar.google.com/citations?user=ZUxl-r0AAAAJ&hl=en&sortby=pubdate';
  url_wos = 'https://www.webofscience.com/wos/author/record/ABE-6509-2020';
}
