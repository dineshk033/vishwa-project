import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTabDescComponent } from './product-tab-desc.component';

describe('ProductTabDescComponent', () => {
  let component: ProductTabDescComponent;
  let fixture: ComponentFixture<ProductTabDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTabDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTabDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
