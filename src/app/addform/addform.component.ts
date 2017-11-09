import { Component, OnInit } from '@angular/core';
import {AccountServiceService } from '../account-service.service'

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent {

  constructor(public accountService: AccountServiceService) {}


  add(form){
    this.accountService.createTransaction(form).subscribe();
  }
}
