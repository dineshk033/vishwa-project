import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewThreeComponent } from './card-view-three.component';

describe('CardViewThreeComponent', () => {
  let component: CardViewThreeComponent;
  let fixture: ComponentFixture<CardViewThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardViewThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardViewThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
