import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../../models/ICustomer';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  public customersList:ICustomer[]=[];
  public error:string='';
  constructor(private customerService:CustomersService) { }
  
  ngOnInit(): void {
    this.customerService.getCustomersList().subscribe((c)=>{
      this.customersList = c;
    }, (error)=>{
      this.error = error;
    });
  }
}
