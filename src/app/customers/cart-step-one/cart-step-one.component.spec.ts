import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartStepOneComponent } from './cart-step-one.component';

describe('CartStepOneComponent', () => {
  let component: CartStepOneComponent;
  let fixture: ComponentFixture<CartStepOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartStepOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
