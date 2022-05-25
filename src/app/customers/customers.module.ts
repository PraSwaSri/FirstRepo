import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
