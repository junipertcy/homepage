import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingComponent5352 } from './5352.component';

describe('TeachingComponent5352', () => {
  let component: TeachingComponent5352;
  let fixture: ComponentFixture<TeachingComponent5352>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachingComponent5352]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachingComponent5352);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
