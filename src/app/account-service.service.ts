import { Injectable } from '@angular/core';
import { Transaction } from './models/Transactions';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AccountServiceService {

  constructor(public http:HttpClient) { }
  public data:any;
  getTransactions():void{
    this.http.get("/transactions/getTransactions")
    .subscribe (
      data => {this.data = data;}
    );
  }

  createTransaction(form){
    this.http.post("/transactions/addTransaction", form)
    .subscribe()
  }

}
