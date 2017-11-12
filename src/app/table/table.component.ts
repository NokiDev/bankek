import { Component, Input } from '@angular/core';
import { Transaction } from '../models/Transactions'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{

FilterPipe
  constructor() { }

  public search:string;

  @Input()
  account: Array<Transaction>
  



  ngOnInit() {
  }

}
