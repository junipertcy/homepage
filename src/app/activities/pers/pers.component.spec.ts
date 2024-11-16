import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersComponent } from './pers.component';

describe('PersComponent', () => {
  let component: PersComponent;
  let fixture: ComponentFixture<PersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
