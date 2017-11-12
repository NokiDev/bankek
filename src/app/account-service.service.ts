import { Injectable } from '@angular/core';
import { Transaction } from './models/Transactions';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable'


@Injectable()
export class AccountServiceService {

  constructor(public http:HttpClient) { }
  public data:any;
  getTransactions():Observable<any>{
    return this.http.get("/transactions/getTransactions");
  }

  createTransaction(form):Observable<any>{
    console.log("1")
    return this.http.post("/transactions/addTransaction", form)
  }
  createCronTransaction(form):Observable<any>{
    console.log("2")    
    return this.http.post("/transactions/addCronTransaction", form)
  }
}
