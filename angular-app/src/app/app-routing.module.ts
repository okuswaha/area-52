/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { CarComponent } from './Car/Car.component';
import { FSDealerContractComponent } from './FSDealerContract/FSDealerContract.component';
import { FSCustomerContractComponent } from './FSCustomerContract/FSCustomerContract.component';
import { FSRouteoneContractComponent } from './FSRouteoneContract/FSRouteoneContract.component';

import { FinanceSourceComponent } from './FinanceSource/FinanceSource.component';
import { CustomerComponent } from './Customer/Customer.component';
import { DealerComponent } from './Dealer/Dealer.component';
import { RouteoneComponent } from './Routeone/Routeone.component';

import { SetupDemoComponent } from './SetupDemo/SetupDemo.component';
import { FSAddsCarToDealerInventoryComponent } from './FSAddsCarToDealerInventory/FSAddsCarToDealerInventory.component';
import { CustomerSubscribedComponent } from './CustomerSubscribed/CustomerSubscribed.component';
import { CustomerPaysSubscriptionFeeComponent } from './CustomerPaysSubscriptionFee/CustomerPaysSubscriptionFee.component';
import { CustomerRentsCarComponent } from './CustomerRentsCar/CustomerRentsCar.component';
import { CustomerReturnsCarComponent } from './CustomerReturnsCar/CustomerReturnsCar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Car', component: CarComponent },
  { path: 'FSDealerContract', component: FSDealerContractComponent },
  { path: 'FSCustomerContract', component: FSCustomerContractComponent },
  { path: 'FSRouteoneContract', component: FSRouteoneContractComponent },
  { path: 'FinanceSource', component: FinanceSourceComponent },
  { path: 'Customer', component: CustomerComponent },
  { path: 'Dealer', component: DealerComponent },
  { path: 'Routeone', component: RouteoneComponent },
  { path: 'SetupDemo', component: SetupDemoComponent },
  { path: 'FSAddsCarToDealerInventory', component: FSAddsCarToDealerInventoryComponent },
  { path: 'CustomerSubscribed', component: CustomerSubscribedComponent },
  { path: 'CustomerPaysSubscriptionFee', component: CustomerPaysSubscriptionFeeComponent },
  { path: 'CustomerRentsCar', component: CustomerRentsCarComponent },
  { path: 'CustomerReturnsCar', component: CustomerReturnsCarComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
