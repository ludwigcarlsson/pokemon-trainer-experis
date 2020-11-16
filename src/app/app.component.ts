import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public isLoggedIn: boolean = false;
  public username: string = '';

  login() {
    localStorage.setItem('username', this.username);
  }

}
