import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAmcComponent } from './customer-amc.component';

describe('CustomerAmcComponent', () => {
  let component: CustomerAmcComponent;
  let fixture: ComponentFixture<CustomerAmcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAmcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
