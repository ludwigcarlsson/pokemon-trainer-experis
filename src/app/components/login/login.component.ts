import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private sessionAuth: SessionService, private router: Router) { }

  ngOnInit(): void {
    if(this.sessionAuth.checkLogin()) {
      this.router.navigateByUrl('/trainer')
    }
  }

  public username: string = '';

  login() {
    this.sessionAuth.login(this.username);
  }

}
