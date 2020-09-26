import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

import { DataView } from 'primeng/dataview';
@Component({
  selector: 'app-customer-product',
  templateUrl: './customer-product.component.html',
  styleUrls: ['./customer-product.component.scss'],
})
export class CustomerProductComponent implements OnInit {
  @ViewChild('dataview') dataview: DataView;
  sortOrder: number;
  sortField: string;
  products;
  fullRecord;
  sortBy = 'popular';
  sortByOption;
  gridToggle = false;
  loading = true;
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getAllLaptop().subscribe((data) => {
      this.products = data;
      this.fullRecord = data;
      this.loading = false;
      console.log(this.products);
    });

    this.sortByOption = [
      // { label: 'Best Selling', value: 'popular' },
      // { label: 'Newest First', value: 'first' },
      { label: 'Highest Price', value: '!price' },
      { label: 'Lowest Price', value: 'price' },
    ];
  }
  filterChange(data) {
    // this.products = [];
    this.products = this.fullRecord;
    Object.keys(data).forEach((key) => {
      if (data[key].length > 0) {
        this.products = this.switchDataFilter(key, data[key]);
      }
    });
    // this.dataview.initialized=true;
  }

  switchDataFilter(key, data) {
    switch (key) {
      case 'brand':
        return this.products.filter((el) => {
          const a = data.includes(el.brand);
          console.log(a, 'switch');
          return a;
        });

      case 'processorType':
        return this.products.filter((el) =>
          data.some((find) =>
            el.specification.processor.indexOf(find) < 0 ? false : true
          )
        );
      case 'price':
        return this.products.filter(
          (el) => el.price.price >= data[0] && el.price.price <= data[1]
        );
      default:
        break;
    }
  }
  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = `price.${value.substring(1, value.length)}`;
    }
    else {
        this.sortOrder = 1;
        this.sortField = `price.${value}`;
    }
}
}

// this.products = [
//   {
//     image:
//       'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
//     name:
//       'Dell Vostro Core i5 10th Gen - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home) ',
//     price: '18346',
//     offerPrice: '14532',
//     containerClass: 'cardBox',
//   },
//   {
//     image:
//       'https://miro.medium.com/max/12000/1*mKmPPRkXEbx7uP10lJ08RQ.jpeg',
//     name:
//       'SAMSUNG Gaming Core i7 8th Gen - (4 GB/1 TB HDD/256 GB SSD/Windows 8 Home) ',
//     price: '18346',
//     offerPrice: '14532',
//     containerClass: 'cardBox',
//   },
//   {
//     image: 'https://cdn.mos.cms.futurecdn.net/yryU6P6CUDxt7khNmE2tvR.jpg',
//     name: 'Dell Vostro Core i5 ',
//     price: '18346',
//     offerPrice: '14532',
//     containerClass: 'cardBox',
//   },
//   {
//     image:
//       'https://o.aolcdn.com/images/dims?quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-05%2Fc24688a0-9b9b-11ea-bfdf-f0c51f267a27&client=amp-blogside-v2&signature=223ebff02fc51b6d76271d1cb64267677a7d2e91',
//     name:
//       'SAMSUNG Gaming Core i7 8th Gen - (4 GB/1 TB HDD/256 GB SSD/Windows 8 Home) ',
//     price: '18346',
//     offerPrice: '14532',
//     containerClass: 'cardBox',
//   },
// ];
