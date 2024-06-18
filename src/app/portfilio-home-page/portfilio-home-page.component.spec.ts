import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfilioHomePageComponent } from './portfilio-home-page.component';

describe('PortfilioHomePageComponent', () => {
  let component: PortfilioHomePageComponent;
  let fixture: ComponentFixture<PortfilioHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfilioHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfilioHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
