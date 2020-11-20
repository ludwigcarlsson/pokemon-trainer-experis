import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss'],
})
export class TrainerComponent implements OnInit {
  public username: string = localStorage.getItem('username') || '';
  public pokemoncards: any = localStorage.getItem('collectedPokemon') ? JSON.parse(localStorage.getItem('collectedPokemon') || '') : [];

  constructor() {}

  ngOnInit(): void {
  }
}
