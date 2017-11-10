import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(public userService: UserServiceService) { }

  ngOnInit() {
  }

  login(form) {
    this.userService.login(form).subscribe();
  }

}
