import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBeRoutedComponent } from './to-be-routed.component';

describe('ToBeRoutedComponent', () => {
  let component: ToBeRoutedComponent;
  let fixture: ComponentFixture<ToBeRoutedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToBeRoutedComponent]
    });
    fixture = TestBed.createComponent(ToBeRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
