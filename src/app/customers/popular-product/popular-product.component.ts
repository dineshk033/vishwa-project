import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cus-popular-product',
  templateUrl: './popular-product.component.html',
  styleUrls: ['./popular-product.component.scss']
})
export class PopularProductComponent implements OnInit {
  products:any;
  responsiveOptions:any;
  constructor() { }

  ngOnInit(): void {
    this.products = 
    [{
      image:'assets/dell.jpg',
      name:'Dell Vostro Core i5 10th Gen - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home) ',
      price:'18346',
      offerPrice:'14532',
      containerClass: 'cardBox'
    },
    {
      image:'assets/samsung.jpg',
      name:'SAMSUNG Gaming Core i7 8th Gen - (4 GB/1 TB HDD/256 GB SSD/Windows 8 Home) ',
      price:'18346',
      offerPrice:'14532',
      containerClass: 'cardBox'
    },
    {
      image:'assets/dell.jpg',
      name:'Dell Vostro Core i5 ',
      price:'18346',
      offerPrice:'14532',
      containerClass: 'cardBox'
    },
    {
      image:'assets/samsung.jpg',
      name:'SAMSUNG Gaming Core i7 8th Gen - (4 GB/1 TB HDD/256 GB SSD/Windows 8 Home) ',
      price:'18346',
      offerPrice:'14532',
      containerClass: 'cardBox'
    },
    {
      image:'assets/dell.jpg',
      name:'Dell Vostro Core i5 10th Gen - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home) ',
      price:'18346',
      offerPrice:'14532',
      containerClass: 'cardBox'
    },
    {
      image:'assets/samsung.jpg',
      name:'SAMSUNG Gaming Core i7 8th Gen - (4 GB/1 TB HDD/256 GB SSD/Windows 8 Home) ',
      price:'18346',
      offerPrice:'14532',
      containerClass: 'cardBox'
    },
    {
      image:'assets/dell.jpg',
      name:'Dell Vostro Core i5 10th Gen - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home) ',
      price:'18346',
      offerPrice:'14532',
      containerClass: 'cardBox'
    },
    {
      image:'assets/samsung.jpg',
      name:'SAMSUNG Gaming Core i7 8th Gen - (4 GB/1 TB HDD/256 GB SSD/Windows 8 Home) ',
      price:'18346',
      offerPrice:'14532',
      containerClass: 'cardBox'
    },
  ];
  this.responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 5,
        numScroll: 1
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
  ];
  }

}
