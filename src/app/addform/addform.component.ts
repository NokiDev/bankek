import { Component, OnInit } from '@angular/core';
import {AccountServiceService } from '../account-service.service'

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent {

  constructor(public accountService: AccountServiceService) {}
  
  public option:Array<string> = ["secondes","minutes","heures","jours", "mois", "années"];
  

  add(form){
    console.log(document.getElementById("cron").style.display)
    document.getElementById("cron").style.display == "inline-block" ? 
    this.accountService.createCronTransaction(form).subscribe():    
    this.accountService.createTransaction(form).subscribe();
  }
  showCron(){
    document.getElementById("cron").style.display == "inline-block" ? 
      document.getElementById("cron").style.display = "none" : 
      document.getElementById("cron").style.display = "inline-block"
  }
}
