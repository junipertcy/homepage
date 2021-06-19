import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CllinComponent } from './cllin.component';

describe('CllinComponent', () => {
  let component: CllinComponent;
  let fixture: ComponentFixture<CllinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CllinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CllinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
