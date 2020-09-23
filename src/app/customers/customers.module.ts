import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import {PrimengCustomModule} from '../primeng-module/primeng-module'
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { DashboardCustomerComponent } from './dashboard-customer/dashboard-customer.component';
import { CardViewOneComponent } from './card-view-one/card-view-one.component';
import { PopularProductComponent } from './popular-product/popular-product.component';
import { CardViewTwoComponent } from './card-view-two/card-view-two.component';
import { LaptopFilterComponent } from './laptop-filter/laptop-filter.component';
import { CardViewThreeComponent } from './card-view-three/card-view-three.component';
import { CustomerProductComponent } from './customer-product/customer-product.component';
import { CustomerAmcComponent } from './customer-amc/customer-amc.component';
import { CustomerSidebarComponent } from './customer-sidebar/customer-sidebar.component';
import { CusCallRequestComponent } from './cus-call-request/cus-call-request.component';
import { CustomerAmcInfoComponent } from './customer-amc-info/customer-amc-info.component';
import { CustomerRequestTrackComponent } from './customer-request-track/customer-request-track.component';
import { CustomerProductDetailComponent } from './customer-product-detail/customer-product-detail.component';
import { ProductImageViewComponent } from './product-image-view/product-image-view.component';
import { ProductTabDescComponent } from './product-tab-desc/product-tab-desc.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { CartStepOneComponent } from './cart-step-one/cart-step-one.component';
import { CartCardViewComponent } from './cart-card-view/cart-card-view.component';


@NgModule({
  declarations: [CustomersComponent, DashboardCustomerComponent, CardViewOneComponent, PopularProductComponent, CardViewTwoComponent, LaptopFilterComponent, CardViewThreeComponent, CustomerProductComponent, CustomerAmcComponent, CustomerSidebarComponent, CusCallRequestComponent, CustomerAmcInfoComponent, CustomerRequestTrackComponent, CustomerProductDetailComponent, ProductImageViewComponent, ProductTabDescComponent, ProductCartComponent, CartStepOneComponent, CartCardViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengCustomModule,
    CustomersRoutingModule
    
  ]
})
export class CustomersModule { }
