import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {

  public pokemoncards: any = 
  [{ 
    title: 'ditto',
    type: 'normal',
    id: 1
  }, {
    title: 'eevee',
    type: 'normal',
    id: 2
  }, {
    title: 'pidgey',
    type: 'normal',
    id: 3
  }]

  constructor() { }

  ngOnInit(): void {
    const container = document.getElementById('login-container');
    if (localStorage.getItem('username') != '' && container != null) {
      container.remove();
    }
  }

}
