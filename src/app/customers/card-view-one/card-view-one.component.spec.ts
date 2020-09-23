import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewOneComponent } from './card-view-one.component';

describe('CardViewOneComponent', () => {
  let component: CardViewOneComponent;
  let fixture: ComponentFixture<CardViewOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardViewOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
