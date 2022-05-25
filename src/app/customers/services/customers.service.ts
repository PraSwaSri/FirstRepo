import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ICustomer } from '../models/ICustomer';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpClient:HttpClient) { }
  public getCustomersList():Observable<ICustomer[]> 
  {
   let dataUrl = "https://jsonplaceholder.typicode.com/users";
    return this.httpClient.get<ICustomer[]>(dataUrl).pipe();     
  }

public habdleError(err:HttpErrorResponse){
  let errorMsg:string='';
  if(err.error instanceof ErrorEvent){
    errorMsg = `${err.error.message}` ;
  }
  else{
    errorMsg = `Status: ${err.status}\n Message:${err.error}`;
    }
  return throwError(errorMsg);
  }
}
