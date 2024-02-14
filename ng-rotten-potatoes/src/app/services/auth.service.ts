import { Injectable } from '@angular/core';

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
  constructor() { }

  login(username : string, password : string) : (UserInfo | null) {
    if (username === "trung") {
      return new UserInfo(username);
    }

    return null;
  }
}
