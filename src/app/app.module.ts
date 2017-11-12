import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { AccountServiceService } from './account-service.service';
import { UserServiceService } from './user-service.service';
import { AddformComponent } from './addform/addform.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AddformComponent,
    LoginFormComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AccountServiceService,
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
