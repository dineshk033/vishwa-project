import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-customer-product-detail',
  templateUrl: './customer-product-detail.component.html',
  styleUrls: ['./customer-product-detail.component.scss'],
})
export class CustomerProductDetailComponent implements OnInit {
  product = {
    name:
      'Dell 7386 Inspiron Laptop (8th Gen Intel Core i7-8265U/16GB/512GB SSD/Integrated Graphics/Windows 10/MSO/FHD), 33.78 cm (13.3 inch)',
    display_name:
      'Dell 7386 Inspiron Laptop (8th Gen Intel Core i7-8265U/16GB/512GB SSD/Integrated Graphics/Windows 10/MSO/FHD), 33.78 cm (13.3 inch)',
    discription: 'string',
    purchasable: 'yes',
    summary:
      '<li>Intel Core i7-8565U Processor</li><li>1920 x 1080 - FHD Screen Resolution</li><li>Touch Narrow Border IPS Display</li><li>Dual Digital Microphone Array</li><li>Integrated Widescreen HD 720P Webcam</li> <li>Active Pen Support</li><li>Windows 10 Home OS</li><li>Intel UHD Graphics 620</li>',
    brand: 'Dell',
    variantModel: 'Inspiron 7386',
    color: 'silver',
    os: 'Windows 10 home',
    price: {
      currencyIso: 'INR',
      price: 30000,
      formattedValue: '₹92,999',
      minQuantity: null,
      maxQuantity: null,
      discount: '30%(₹39,295)',
    },
    imageUrl: [
      'https://source.unsplash.com/1600x900/?product',
      'https://source.unsplash.com/1600x900/?product',
      'https://source.unsplash.com/1600x900/?product',
      'https://source.unsplash.com/1600x900/?product',
    ],
    displayImage:
      "'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    cashOnDelivery: true,
    pickUpFromStoreEnabled: true,
    payAtStoreEnabled: true,
    shipmentEnabled: true,
    stock: '5',
    futureStocks: null,
    isPreOrderEnabled: false,
    averageRating: null,
    numberOfReviews: null,
    specification: {
      resolution: '1920 x 1080',
      gpu: 'Intel Integrated Graphics',
      height: '30.77 cms',
      width: '30.77 cms',
      manufactureWarranty: null,
      weight: '1450 grams',
      screenSize: '15 inch',
      series: '7386',
      touch: false,
      processor: 'Intel Core i7 7th Gen',
      memory: '8 GB DDR3',
      hardDisk: '512 GB SSD',
    },
  };
  loading = true;

  constructor(
    private productService: ProductsService,
    private _Activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe((params) => {
      // console.log(params.get('id'));
      const id = params.get('id');
      this.productService.getAllLaptop().subscribe((data) => {
        this.product = data.find((el) => el.display_name.trim() == id.trim());
        this.loading = false;
        // console.log(this.product);
      });
    });
  }
}
