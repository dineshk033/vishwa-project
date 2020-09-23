import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-customer-request-track',
  templateUrl: './customer-request-track.component.html',
  styleUrls: ['./customer-request-track.component.scss']
})
export class CustomerRequestTrackComponent implements OnInit {
  items: MenuItem[];
  activeIndex: number = 0;
  constructor() { }

    ngOnInit() {
        this.items = [
            {label: 'Appointment',command:()=>{
              this.activeIndex =0;
            }},
            {label: 'Service',command:()=>{
              this.activeIndex = 1;
            }},
            {label: 'Completed',command:()=>{
              this.activeIndex = 2;
            }}
        ];
    }
}
