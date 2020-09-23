import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-customer-amc-info',
  templateUrl: './customer-amc-info.component.html',
  styleUrls: ['./customer-amc-info.component.scss']
})
export class CustomerAmcInfoComponent implements OnInit {
  customerLog: any[];
  items: MenuItem[];
  activeItem;
  constructor() { }

  ngOnInit(): void {
    this.customerLog = [
      {
        icon: 'sentiment_satisfied_alt',
        count: '534',
        label: 'Happy Customers'
      },
      {
        icon: 'toys',
        count: '342',
        label: 'OS Installed'
      },
      {
        icon: 'laptop',
        count: '323+',
        label: 'Laptop Repaired'
      },
      {
        icon: 'desktop_windows',
        count: '232+',
        label: 'Computer Repaired'
      }
    ];
    this.items = [
      {
        label: 'Basic Plan', icon: 'pi pi-fw pi-home', 
        command: () => {
        //  alert('home');
        }
      },
      {
        label: 'Business Plan', icon: 'pi pi-briefcase', 
        command: () => {
          // this.closeDisplay.emit(false);
        }
      },
    ];
    this.activeItem = this.items[0];
  
  }

}
