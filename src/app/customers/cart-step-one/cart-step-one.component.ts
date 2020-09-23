import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cart-step-one',
  templateUrl: './cart-step-one.component.html',
  styleUrls: ['./cart-step-one.component.scss']
})
export class CartStepOneComponent implements OnInit {
  qtyOptions :any[] 
  constructor() { }

  ngOnInit(): void {
    this.qtyOptions = []// [...Array(5).keys()].map(el=>({name:el+1,code:el+1}))
  }

}
