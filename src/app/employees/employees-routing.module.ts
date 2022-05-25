import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [
    { path: '', component: EmployeesComponent },
    {path:'list', component:EmployeeListComponent},
    {path:'list/:id', component:EmployeeDetailsComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
