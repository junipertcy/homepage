import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-tw',
  standalone: true,
  imports: [NzIconModule],
  templateUrl: './tw.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './tw.component.css'
})
export class TwComponent {

}
