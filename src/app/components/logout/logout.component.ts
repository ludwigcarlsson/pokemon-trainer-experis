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
    // Checks if the user is logged in or not
  ngOnInit(): void {
    if (this.session.checkLogin()) {
      this.loginStatus = true; 
    } else {
      this.loginStatus = false;
    }
  }
    // This function logs the user out and clears their local storage of the
    // collected pokemons and their trainer name.
  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('/'); 
  }
  
}
