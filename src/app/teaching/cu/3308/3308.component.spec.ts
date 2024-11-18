import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeachingComponent3308 } from './3308.component';

describe('TeachingComponent3308', () => {
  let component: TeachingComponent3308;
  let fixture: ComponentFixture<TeachingComponent3308>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingComponent3308 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingComponent3308);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
