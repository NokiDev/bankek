import { Injectable } from '@angular/core';
import { Transaction } from './models/Transactions';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AccountServiceService {

  constructor(public http:HttpClient) { }
  public data:Array<String>;
  getTransactions():Array<String>{
    this.http.get("/transactions")
    .subscribe (
      data => {this.data}
    );
    return this.data;
  }

}