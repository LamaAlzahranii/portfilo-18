import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfilioSliderComponent } from './portfilio-slider.component';

describe('PortfilioSliderComponent', () => {
  let component: PortfilioSliderComponent;
  let fixture: ComponentFixture<PortfilioSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfilioSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfilioSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
