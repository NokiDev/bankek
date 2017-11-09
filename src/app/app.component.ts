import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from './account-service.service';
import { Transaction } from './models/Transactions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  accounts:any;

  constructor(public account:AccountServiceService){
  }

  ngOnInit(){
    this.refresh();
    setInterval(() => {
      this.refresh()
    }, 5000);
  }

  refresh(){
    this.account.getTransactions().subscribe(data=>this.accounts = data.transactions);
    
  }
}