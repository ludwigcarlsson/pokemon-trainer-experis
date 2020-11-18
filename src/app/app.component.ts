import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session/session.service';
import { Router } from '@angular/router'
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor (private authSession: SessionService, private router: Router) {}

  ngOnInit(): void {
    if(this.authSession.checkLogin()) {
      this.router.navigateByUrl('/trainer');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  
}
