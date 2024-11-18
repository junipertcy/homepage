import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeachingComponent2270 } from './2270.component';

describe('TeachingComponent2270', () => {
  let component: TeachingComponent2270;
  let fixture: ComponentFixture<TeachingComponent2270>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingComponent2270 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingComponent2270);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
