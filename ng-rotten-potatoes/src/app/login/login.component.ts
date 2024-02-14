import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";

  errorMessage = "";

  constructor(private authService : AuthService, private router : Router) {}

  ngOnInit(): void {}

  login() : void {
    if (!this.username || this.username.trim().length === 0) {
      this.errorMessage = "Username Is Required!!";
    }
    else if (!this.password || this.password.trim().length === 0) {
      this.errorMessage = "Password Is Required!!";
    }

    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['home']);
    } else {
      this.errorMessage = "Invalid Credential!!";
    }
  }
}