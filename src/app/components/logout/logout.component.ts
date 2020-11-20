import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  public loginStatus: boolean = false;

  constructor(private router: Router, private session: SessionService) { }

  ngOnInit(): void {
    if (this.session.checkLogin()) {
      this.loginStatus = true; 
    } else {
      this.loginStatus = false;
    }
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('/'); 
  }
  
}
