import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    if(this.sessionAuth.checkLogin()) { // check session for loginstatus, if logged in, redirect
      this.router.navigateByUrl('/trainer')
    }
  }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(2)])
  });

  get username(): any {
    return this.loginForm.get('username');
  }

  login() {
    this.sessionAuth.login(this.loginForm.get('username')?.value); // login and add user to this session (stores in localstorage)
  }

}
