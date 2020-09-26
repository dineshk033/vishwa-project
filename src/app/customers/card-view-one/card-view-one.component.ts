import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'customer-card-one',
  templateUrl: './card-view-one.component.html',
  styleUrls: ['./card-view-one.component.scss']
})
export class CardViewOneComponent implements OnInit {
  @Input() productDetail: any;
  product;
  containerClass:any;
  imgClass:any;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.productDetail)
    // this.containerClass = {
    //   'card':this.productDetail.containerClass === 'card',
    //   'card box-shadow': this.productDetail.containerClass === 'cardBox'
    // }
    // this.imgClass = {
    //   'card-img-style':this.productDetail.containerClass === 'card',
    //   'card-img': this.productDetail.containerClass === 'cardBox'
    // }
    this.product={
      // image: `https://source.unsplash.com/1600x900/?${this.productDetail.brand}`|| 'assets/dell.jpg',
      image: 'assets/dell.jpg',
      name: this.productDetail?.display_name || 'Product Name',
      price: Math.random()*30000,
      offerPrice:  Math.random()*40000,

    }
  }

}
