import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-tab-desc',
  templateUrl: './product-tab-desc.component.html',
  styleUrls: ['./product-tab-desc.component.scss']
})
export class ProductTabDescComponent implements OnInit {
  itemSpec = [ //refer https://www.newegg.com/global/in-en/asus-f513ia-eb55-wh/p/N82E16834235513
    {
      title: 'Model',
      speclist: [{ label: 'Brand', key: 'brand' },
      { label: 'Series', key: 'series' },
      { label: 'Model', key: 'model' },
      { label: 'Year', key: 'year' },
      ]
    },
    {
      title: 'Quick Info',
      speclist: [
        { label: 'Color', key: 'color' },
        { label: 'Operating System', key: 'os' },
        { label: 'CPU', key: 'processor' },
        { label: 'Screen', key: 'screen' },
        { label: 'Maximum Resolution', key: 'resolution' },
        { label: 'Memory', key: 'memory' },

      ]
    }
  ]

  itemValue = {
    brand: 'DELL INSPIRON',
    series: ' Inspirion 123',
    model: 'F513IA-EB55-W',
    os: 'Windows 10 Home Edition',
    year: '2018',
    color:'Dreamy White',
    processor:'AMD Ryzen 5 4500U 2.30 GHz',
    screen :'14\" inch' ,
    resolution:'1024 x 768',
    memory: '8 GB DDR4'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
