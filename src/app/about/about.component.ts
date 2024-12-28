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
}
