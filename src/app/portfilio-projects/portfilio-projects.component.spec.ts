import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfilioProjectsComponent } from './portfilio-projects.component';

describe('PortfilioProjectsComponent', () => {
  let component: PortfilioProjectsComponent;
  let fixture: ComponentFixture<PortfilioProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfilioProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfilioProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
