import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YiRComponent } from './yi-r.component';

describe('YiRComponent', () => {
  let component: YiRComponent;
  let fixture: ComponentFixture<YiRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YiRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YiRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
