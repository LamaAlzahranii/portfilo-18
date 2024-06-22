import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfilioFooterComponent } from './portfilio-footer.component';

describe('PortfilioFooterComponent', () => {
  let component: PortfilioFooterComponent;
  let fixture: ComponentFixture<PortfilioFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfilioFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfilioFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
