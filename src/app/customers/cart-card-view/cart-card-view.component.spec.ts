import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCardViewComponent } from './cart-card-view.component';

describe('CartCardViewComponent', () => {
  let component: CartCardViewComponent;
  let fixture: ComponentFixture<CartCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
