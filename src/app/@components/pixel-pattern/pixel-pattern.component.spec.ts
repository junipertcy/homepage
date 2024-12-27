import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelPatternComponent } from './pixel-pattern.component';

describe('PixelPatternComponent', () => {
  let component: PixelPatternComponent;
  let fixture: ComponentFixture<PixelPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PixelPatternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PixelPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
