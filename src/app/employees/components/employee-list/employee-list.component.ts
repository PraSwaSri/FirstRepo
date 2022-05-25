import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../models/IEmployee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public emplList:IEmployee[]=[];
  public error:string = "";
  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    this.empService.getAllEmployees().subscribe((e)=>{
      this.emplList = e;
    });
  }

}
