import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICustomer } from '../../models/ICustomer';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  //public selectedCustomer:ICustomer;
  //public selectedId:string;
  //public error:string="";

  constructor(private activatedRoute:ActivatedRoute, private customerService:CustomersService) 
    {
      
   }
   
  ngOnInit(): void {
    
    // this.activatedRoute.paramMap.subscribe((p)=>{
    //   let testId = p.get('id');
    //   if(testId){
    //     //this.selectedId =testId;
    //   }
    //   else{
    //     alert("No Record Found");
    //   }     
    // });

    // this.customerService.getCustomersList().subscribe((customer)=>{
    //   //let x = customer.find((c)=>((c.id).toString() === this.selectedId));
   
    // });
  }
}
