import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cus-laptop-filter',
  templateUrl: './laptop-filter.component.html',
  styleUrls: ['./laptop-filter.component.scss']
})
export class LaptopFilterComponent implements OnInit {
  processorSelect: any[] = ['Technology', 'Sports'];
  priceSelect= [];
  screenSelect = [];
  screenToggle =false;
  screenCatg = [
    {name:'Upto 10\"', key:'10'},
    {name:'11\" - 12\"', key: '12'},
    {name:'13\" - 14\"', key: '14'},
    {name:'15\" - 16\"', key: '16'},
    {name:'11\" & more', key: '17'},
  ]
  priceRange:any[] = [
    {name:'Under ₹10,000',key:'low'},
    {name:'₹15,000-₹20000',key:'mid'},
    {name:'Above ₹20000',key:'high'}
  ]
  processorCatg: any[] = [
    {name: 'Intel Core i5', key: 'i5'}, 
    {name: 'Intel Core i7', key: 'i7'}, 
    {name: 'Intel Core i3', key: 'i3'}, 
    {name: 'Intel Celeron', key: 'celeron'},
    {name:'Intel Atom', key:'atom' }
  ];
  processorToggle =false;
  constructor() { }

  ngOnInit(): void {
  }

  handlePriceChange() {
    // alert('sd')
    console.log(this.priceSelect)
    const latestPrice = this.priceSelect[this.priceSelect.length - 1];
    this.priceSelect.length = 0;
    this.priceSelect.push(latestPrice);
  }
}
