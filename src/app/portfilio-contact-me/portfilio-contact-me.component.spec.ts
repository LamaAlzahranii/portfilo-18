import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfilioContactMeComponent } from './portfilio-contact-me.component';

describe('PortfilioContactMeComponent', () => {
  let component: PortfilioContactMeComponent;
  let fixture: ComponentFixture<PortfilioContactMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfilioContactMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfilioContactMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
