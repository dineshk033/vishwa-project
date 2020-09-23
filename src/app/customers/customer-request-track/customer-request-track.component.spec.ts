import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRequestTrackComponent } from './customer-request-track.component';

describe('CustomerRequestTrackComponent', () => {
  let component: CustomerRequestTrackComponent;
  let fixture: ComponentFixture<CustomerRequestTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRequestTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRequestTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
