import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  products;
  sortBy = 'popular';
  sortByOption;
  gridToggle =false;
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
      }
    ];
    this.sortByOption = [
      {name:'Best Selling', code:'popular'},
      {name:'Newest First', key:'first'},
      {name:'Highest Price', key:'high'},
      {name:'Lowest Price', key:'low'}
    ]
  }

}
