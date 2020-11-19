import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public loginStatus: boolean = false;
  public collectedPokemons: any = JSON.parse(localStorage.getItem('collectedPokemon') || '') || [];

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

  collectPokemon(pokemon: any) {
    this.collectedPokemons.push(pokemon);
    localStorage.setItem('collectedPokemon', JSON.stringify(this.collectedPokemons));
  }
  
}
