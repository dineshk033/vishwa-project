import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-tab-desc',
  templateUrl: './product-tab-desc.component.html',
  styleUrls: ['./product-tab-desc.component.scss']
})
export class ProductTabDescComponent implements OnInit {

  @Input() itemValue:any;
  itemSpec = [ //refer https://www.newegg.com/global/in-en/asus-f513ia-eb55-wh/p/N82E16834235513
    {
      title: 'Model',
      speclist: [{ label: 'Brand', key: 'brand' },
      // { label: 'Series', key: 'series' },
      { label: 'Model', key: 'variantModel' },
      // { label: 'Year', key: 'year' },
      ]
    },
    {
      title: 'Quick Info',
      speclist: [
        { label: 'Color', key: 'color' ,subKey:''},
        { label: 'Operating System', key: 'os'  ,subKey:'' },
        { label: 'CPU Processor', key: 'specification',subKey:'processor' },
        { label: 'Screen Size', key: 'specification' ,subKey:'screenSize'},
        { label: 'Maximum Resolution', key: 'specification' ,subKey:'resolution'},
        { label: 'Memory', key: 'specification',subKey:'memory' },
        { label: 'Storage', key: 'specification' ,subKey:'hardDisk'},
        { label: 'Graphics Card', key: 'specification' ,subKey:'gpu'},
        { label: 'Height', key: 'specification' ,subKey:'height'},
        { label: 'Width', key: 'specification',subKey:'width' },
        { label: 'Wieght', key: 'specification',subKey:'weight' },
        { label: 'Display Touch', key: 'specification' ,subKey:'touch'},
        { label: 'Manufacture Warrenty', key: 'specification' ,subKey:'manufactureWarranty'},

      ]
    }
  ]

  // itemValue :any;
  // = {
  //   brand: 'DELL INSPIRON',
  //   series: ' Inspirion 123',
  //   model: 'F513IA-EB55-W',
  //   os: 'Windows 10 Home Edition',
  //   year: '2018',
  //   color:'Dreamy White',
  //   processor:'AMD Ryzen 5 4500U 2.30 GHz',
  //   screen :'14\" inch' ,
  //   resolution:'1024 x 768',
  //   memory: '8 GB DDR4'
  // }

  constructor() { }

  ngOnInit(): void {
    console.log(this.itemValue)
    // this.itemValue.brand = this.product.
  }

}
