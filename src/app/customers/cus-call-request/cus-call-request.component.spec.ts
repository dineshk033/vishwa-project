import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusCallRequestComponent } from './cus-call-request.component';

describe('CusCallRequestComponent', () => {
  let component: CusCallRequestComponent;
  let fixture: ComponentFixture<CusCallRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusCallRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusCallRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
