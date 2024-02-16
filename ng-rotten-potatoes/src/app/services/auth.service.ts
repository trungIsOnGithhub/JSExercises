import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

class UserInfo {
  private userId : string;

  constructor(id : string) {
    this.userId = id;
  }

  getId() : string {
    return this.userId;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router : Router) { }

  login(username : string, password : string) : (UserInfo | null) {
    if (username === "trung") {
      return new UserInfo(username);
    }

    return null;
  }

  logout() {
    this.router.navigate(['login']);
  }
}
