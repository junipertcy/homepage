import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';


@Component({
  selector: 'app-sem',
  standalone: true,
  imports: [NzIconModule],
  templateUrl: './sem.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './sem.component.css'
})
export class SemComponent {

}
