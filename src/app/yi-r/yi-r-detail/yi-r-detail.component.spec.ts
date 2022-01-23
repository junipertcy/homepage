import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YiRDetailComponent } from './yi-r-detail.component';

describe('YiRDetailComponent', () => {
  let component: YiRDetailComponent;
  let fixture: ComponentFixture<YiRDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YiRDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YiRDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
