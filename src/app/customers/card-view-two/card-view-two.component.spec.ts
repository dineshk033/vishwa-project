import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewTwoComponent } from './card-view-two.component';

describe('CardViewTwoComponent', () => {
  let component: CardViewTwoComponent;
  let fixture: ComponentFixture<CardViewTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardViewTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardViewTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
