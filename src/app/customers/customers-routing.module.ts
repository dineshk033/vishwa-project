import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomerProductComponent } from './customer-product/customer-product.component';
import { CustomerAmcComponent } from './customer-amc/customer-amc.component';
import { CustomerAmcInfoComponent } from './customer-amc-info/customer-amc-info.component';
import { CusCallRequestComponent } from './cus-call-request/cus-call-request.component';
import { CustomerRequestTrackComponent } from './customer-request-track/customer-request-track.component';
import { CustomerProductDetailComponent } from './customer-product-detail/customer-product-detail.component';
import { AuthGuard} from '../service/guards/auth.guard';

const routes: Routes = [
  { path: '', component: CustomersComponent,pathMatch:'full' },
  { path: 'product', component: CustomerProductComponent },
  { path: 'accessories', component:CustomerProductDetailComponent,canActivate : [AuthGuard]},
  {
    path: 'amc', component: CustomerAmcComponent, children: [
      { path: '', component: CustomerAmcInfoComponent, pathMatch: 'full' },
      { path: 'request', component: CusCallRequestComponent ,canActivate : [AuthGuard]},
      { path: 'track', component: CustomerRequestTrackComponent, canActivate : [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
