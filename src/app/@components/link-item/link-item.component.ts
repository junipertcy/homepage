import { Component, Input } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-link-item',
  standalone: true,
  imports: [NzIconModule],
  templateUrl: './link-item.component.html',
  styleUrl: './link-item.component.css',
})
export class LinkItemComponent {
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

  constructor(private sanitizer: DomSanitizer) {}
}
