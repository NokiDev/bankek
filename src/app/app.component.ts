import { Component } from '@angular/core';
import { AccountServiceService } from './account-service.service';
import { Transaction } from './models/Transactions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  accounts:any;

  constructor(public account:AccountServiceService){
    //account.getTransactions();
    //this.accounts = account.data.transactions;
  }
}