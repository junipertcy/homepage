import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons';
import { IconComponent } from '../icon/icon.component';


@Component({
  selector: 'app-link-item',
  standalone: true,
  imports: [FontAwesomeModule, IconComponent],
  templateUrl: './link-item.component.html',
  styleUrl: './link-item.component.css',
})
export class LinkItemComponent {
  faSquareUpRight = faSquareUpRight;

  @Input() link!: string;
  @Input() title!: string;
  @Input() author!: string;
  @Input() publication!: string;
  @Input() set desc(value: string) {
    this._desc = this.sanitizer.bypassSecurityTrustHtml(value);
  }

  private _desc!: SafeHtml;

  get desc(): SafeHtml {
    return this._desc;
  }

  constructor(private sanitizer: DomSanitizer) { }
}
