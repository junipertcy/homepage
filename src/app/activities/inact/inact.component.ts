import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-inact',
  standalone: true,
  imports: [NzDividerModule, NzIconModule],
  templateUrl: './inact.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './inact.component.css'
})
export class InactComponent {

}
