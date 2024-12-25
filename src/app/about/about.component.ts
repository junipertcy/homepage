import { Component } from '@angular/core';
import { faBluesky } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NzIconModule } from 'ng-zorro-antd/icon';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule, NzIconModule],
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.css', 
    '../../../node_modules/academicons/css/academicons.min.css',
  ]
})
export class AboutComponent {
  faBluesky = faBluesky;
}
