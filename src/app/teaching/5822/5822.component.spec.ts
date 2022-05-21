import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeachingComponent5822 } from './5822.component';

describe('TeachingComponent5822', () => {
  let component: TeachingComponent5822;
  let fixture: ComponentFixture<TeachingComponent5822>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingComponent5822 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingComponent5822);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
