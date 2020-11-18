import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public loginStatus: boolean = false;

  constructor() { }

  checkLogin(): boolean {
    if (localStorage.getItem('username')) {
      this.loginStatus = true;
    }
    return this.loginStatus;
  }

  login(username: string) {
    localStorage.setItem('username', username);
  }
  
}
