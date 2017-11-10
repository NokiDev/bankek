import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class UserServiceService {

  constructor(public http: HttpClient) { }

  login(form): Observable<any> {
    return this.http.post("/users/connect", form)
  }



}
