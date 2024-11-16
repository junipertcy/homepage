import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactComponent } from './inact.component';

describe('InactComponent', () => {
  let component: InactComponent;
  let fixture: ComponentFixture<InactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
