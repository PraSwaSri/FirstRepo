import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './root/components/about/about.component';
import { ContactComponent } from './root/components/contact/contact.component';
import { HomeComponent } from './root/components/home/home.component';

const routes: Routes = [
        {path:'', component:HomeComponent},
        {path:'about',component:AboutComponent},
        {path:'contact', component:ContactComponent},
        { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, 
        { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
        { path: 'stocks', loadChildren: () => import('./stocks/stocks.module').then(m => m.StocksModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
