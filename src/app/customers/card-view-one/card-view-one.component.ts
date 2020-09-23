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
    console.log(this.productDetail)
    this.containerClass = {
      'card':this.productDetail.containerClass === 'card',
      'card box-shadow': this.productDetail.containerClass === 'cardBox'
    }
    this.imgClass = {
      'card-img-style':this.productDetail.containerClass === 'card',
      'card-img': this.productDetail.containerClass === 'cardBox'
    }
    this.product={
      image: this.productDetail?.image || 'assets/dell.jpg',
      name: this.productDetail?.name || 'Product Name',
      price: this.productDetail?.price || '32222',
      offerPrice: this.productDetail?.offerPrice || '343434'  

    }
  }

}
