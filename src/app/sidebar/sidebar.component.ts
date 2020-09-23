import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: MenuItem[];
  @Input() display: boolean;
  @Output() closeDisplay = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.items = [{
      items: [{
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/'],
        routerLinkActiveOptions: { exact: true },
        styleClass: "active",
        command: () => {
          this.closeDisplay.emit(false);
        }
      },
      {
        label: 'Product',
        icon: 'pi pi-shopping-cart',
        routerLink: ['/customers/product'],
        command: () => {
          this.closeDisplay.emit(false);
        }
      },
      {
        label: 'Accessories',
        icon: 'pi pi-mobile',
        routerLink: ['/customers/accessories'],
        command: () => {
          this.closeDisplay.emit(false);
        }
      },
      {
        label: 'Computer AMC',
        icon: 'pi pi-cog', 
        routerLink: ['customers/amc'],
        command: () => {
          this.closeDisplay.emit(false);
        }
      }
      ]
    }
    ];
  }

  onHide($event) {
    this.closeDisplay.emit(false)
  }

}
