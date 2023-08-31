import { ComponentFixture, TestBed } from '@angular/core/testing';


import { MaindashComponent } from './maindash.component';

describe('MaindashComponent', () => {
  let component: MaindashComponent;
  let fixture: ComponentFixture<MaindashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaindashComponent]
    });
    fixture = TestBed.createComponent(MaindashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
