import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Current_phaseComponent } from './current_phase.component';

describe('Current_phaseComponent', () => {
  let component: Current_phaseComponent;
  let fixture: ComponentFixture<Current_phaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Current_phaseComponent]
    });
    fixture = TestBed.createComponent(Current_phaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});