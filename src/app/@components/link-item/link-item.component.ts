import { Component, Input } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

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
}
