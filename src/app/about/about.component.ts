import { Component, afterNextRender, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NzGridModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.css',
  ]
})
export class AboutComponent {
  // Put together in the browser, so the prerendered HTML carries only
  // "tcy [at] inferweave [dot] com" for scrapers to find (same as the homepage).
  email = signal<string | null>(null);

  constructor() {
    afterNextRender(() => this.email.set(['tcy', 'inferweave.com'].join('@')));
  }
}
