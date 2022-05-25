import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
      { path: '', component: CustomersComponent },
      {path:'list', component:CustomersListComponent},
      {path:'list/:id', component:CustomerDetailsComponent}
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
