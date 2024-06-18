import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfilioHeaderComponent } from './portfilio-header.component';

describe('PortfilioHeaderComponent', () => {
  let component: PortfilioHeaderComponent;
  let fixture: ComponentFixture<PortfilioHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfilioHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfilioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
