import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cart-card-view',
  templateUrl: './cart-card-view.component.html',
  styleUrls: ['./cart-card-view.component.scss']
})
export class CartCardViewComponent implements OnInit {
  qtyOptions:any[];
  constructor() { }

  ngOnInit(): void {
    this.qtyOptions =  [...Array(5).keys()].map(el=>({name:el+1,code:el+1}))
  }

}
