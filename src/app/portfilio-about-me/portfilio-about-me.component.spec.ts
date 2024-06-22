import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfilioAboutMeComponent } from './portfilio-about-me.component';

describe('PortfilioAboutMeComponent', () => {
  let component: PortfilioAboutMeComponent;
  let fixture: ComponentFixture<PortfilioAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfilioAboutMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfilioAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
