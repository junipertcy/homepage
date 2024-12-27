import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {
  private reloadSubject = new BehaviorSubject<string>('');
  reloadTrigger$ = this.reloadSubject.asObservable();

  triggerReload(componentId: string) {
    this.reloadSubject.next(componentId);
  }
}
