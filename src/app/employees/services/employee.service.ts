import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  

  public getAllEmployees():Observable<IEmployee[]>{
    let dataUrl = "https://jsonplaceholder.typicode.com/users";
    return this.httpClient.get<IEmployee[]>(dataUrl).pipe();
  }

  public handleError(errorRes:HttpErrorResponse){
    let errMsg:string= "";
   if(errorRes.error instanceof ErrorEvent){
      errMsg = `${errorRes.error.message}`;
   } 
   else{
     errMsg = `${errorRes.status}`;
   }
  }
 
}
