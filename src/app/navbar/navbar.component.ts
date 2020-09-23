import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('menu') menu: any;
  categories: any;
  selectedCatg = ''
  display = false;
  items: MegaMenuItem[];
  subMenu: MenuItem[];
  userName ='';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isUserLoggedIn$().subscribe(data=>{
        this.userName = data;
    })
    // this.userName = this.authService.isUserLoggedIn();
    this.categories = [
      {
        label: 'All',
        value: ''
      },
      {
        label: 'Laptop',
        value: 'laptop'
      }
    ];
    this.items = [
      {
        label: 'Home',
        routerLink: ['/']
      },
      {
        label: 'Laptop',
        routerLink: ['/product']
      },
      {
        label: 'Accessories',
        routerLink: ['/accessories']
      },
      {
        label: 'AMC Service',
        command: (event) => {
          this.menu.toggle(event.originalEvent);
        }
      }
    ];
    this.subMenu = [
      {
        label: 'Scheme Detail',
        routerLink: ['/amc']
      },
      {
        label: 'Call Request',
        routerLink: ['/amc/request']
      },
      {
        label: 'Appointment Track',
        routerLink: ['/amc/track']
      }
    ]
  }

}
