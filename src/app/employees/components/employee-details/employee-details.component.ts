import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../../models/IEmployee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public selectedId:string = '';
  constructor(private activatedRoute:ActivatedRoute,private empService:EmployeeService) { }
  ngOnInit(): void {
  }

  //this.acti

}
