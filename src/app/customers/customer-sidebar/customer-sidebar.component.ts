import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'customer-sidebar',
  templateUrl: './customer-sidebar.component.html',
  styleUrls: ['./customer-sidebar.component.scss']
})
export class CustomerSidebarComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label:'Scheme Detail',
        routerLink:['../amc']
      },
      {
        label:'Call Request',
        routerLink:['../amc/request']
      },
      {
        label:'Appointment Track',
        routerLink:['../amc/track']
      },
      {
        label:'Request History'
      },
      {
         label:'Users',
         icon:'pi pi-fw pi-user',
         items:[
            {
               label:'New',
               icon:'pi pi-fw pi-user-plus',

            },
            {
               label:'Delete',
               icon:'pi pi-fw pi-user-minus',

            },
            {
               label:'Search',
               icon:'pi pi-fw pi-users',
               items:[
                  {
                     label:'Filter',
                     icon:'pi pi-fw pi-filter',
                     items:[
                        {
                           label:'Print',
                           icon:'pi pi-fw pi-print'
                        }
                     ]
                  },
                  {
                     icon:'pi pi-fw pi-bars',
                     label:'List'
                  }
               ]
            }
         ]
      },
    ];
  }

}
