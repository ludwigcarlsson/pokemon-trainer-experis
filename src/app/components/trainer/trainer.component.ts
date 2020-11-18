import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss'],
})
export class TrainerComponent implements OnInit {
  public username: string = localStorage.getItem('username') || '';
  public pokemoncards: any = [
    {
      title: 'ditto',
      type: 'normal',
      id: 1,
    },
    {
      title: 'eevee',
      type: 'normal',
      id: 2,
    },
    {
      title: 'pidgey',
      type: 'normal',
      id: 3,
    },
  ];

  constructor(private sessionAuth: SessionService, private router: Router) {}

  ngOnInit(): void {
    if(!this.sessionAuth.checkLogin()) {
      this.router.navigateByUrl('/login')
    }
  }
}
