import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Voltage_phaseComponent } from './voltage_phase.component';

describe('Voltage_phaseComponent', () => {
  let component: Voltage_phaseComponent;
  let fixture: ComponentFixture<Voltage_phaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Voltage_phaseComponent]
    });
    fixture = TestBed.createComponent(Voltage_phaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});