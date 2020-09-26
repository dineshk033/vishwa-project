import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cus-laptop-filter',
  templateUrl: './laptop-filter.component.html',
  styleUrls: ['./laptop-filter.component.scss'],
})
export class LaptopFilterComponent implements OnInit {
  @Output('formFilter') filterEmitter = new EventEmitter();
  processorSelect: any[] = ['Technology', 'Sports'];
  screenToggle = false;
  pricemax = 100000;
  pricemin = 7000;
  priceRange = [7000, 100000];
  screenCatg = [
    { name: 'Upto 10"', key: '10' },
    { name: '11" - 12"', key: '12' },
    { name: '13" - 14"', key: '14' },
    { name: '15" - 16"', key: '16' },
    { name: '11" & more', key: '17' },
  ];
  // priceRange:any[] = [
  //   {name:'Under ₹10,000',key:'low'},
  //   {name:'₹15,000-₹20000',key:'mid'},
  //   {name:'Above ₹20000',key:'high'}
  // ]
  processorCatg: any[] = [
    { name: 'Intel Core i5', key: 'i5' },
    { name: 'Intel Core i7', key: 'i7' },
    { name: 'Intel Core i3', key: 'i3' },
    { name: 'Intel Celeron', key: 'celeron' },
    { name: 'Intel Atom', key: 'atom' },
  ];
  brandCatg: any[] = [
    { name: 'Dell', key: 'Dell' },
    { name: 'Samsung', key: 'SAMSUNG' },
    { name: 'HP', key: 'HP' },
    { name: 'Acer', key: 'ACER' },
    { name: 'ASUS', key: 'ASUS' },
  ];
  processorToggle = true;
  filterForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      processorType: [[]],
      screenSize: [[]],
      brand: [[]],
    });
    this.filterForm.valueChanges.subscribe((data) => {
      this.filterEmitter.emit({...data,price:this.priceRange});
      // console.log({...data,price:this.priceRange});
    });
  }

  handlePriceChange(event) {
    this.pricemax = event.values[1];
    this.pricemin = event.values[0];
    this.filterEmitter.emit({...this.filterForm.value,price:this.priceRange});
  }
  priceChange($event, type) {
    if (type === 'max') {
      this.priceRange = [this.pricemin, parseInt($event)];
    } else {
      this.priceRange = [parseInt($event), this.pricemax];
    }
    this.filterEmitter.emit({...this.filterForm.value,price:this.priceRange});
  }
}
