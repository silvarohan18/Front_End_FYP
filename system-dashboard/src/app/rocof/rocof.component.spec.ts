import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocofComponent } from './rocof.component';

describe('RocofComponent', () => {
  let component: RocofComponent;
  let fixture: ComponentFixture<RocofComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RocofComponent]
    });
    fixture = TestBed.createComponent(RocofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
