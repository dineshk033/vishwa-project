import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAmcInfoComponent } from './customer-amc-info.component';

describe('CustomerAmcInfoComponent', () => {
  let component: CustomerAmcInfoComponent;
  let fixture: ComponentFixture<CustomerAmcInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAmcInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAmcInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
