import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GprComponent } from './gpr.component';

describe('GprComponent', () => {
  let component: GprComponent;
  let fixture: ComponentFixture<GprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GprComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
