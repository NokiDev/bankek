import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { AccountServiceService } from './account-service.service';
import { AddformComponent } from './addform/addform.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AddformComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AccountServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
