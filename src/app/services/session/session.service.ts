import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public loginStatus: boolean = false;
  public collectedPokemons: any =  localStorage.getItem('collectedPokemon') ? JSON.parse(localStorage.getItem('collectedPokemon') || '') : [];

  constructor() { }

  checkLogin(): boolean { // check localstorage for a value with the specified key, adjust loginStatus accordingly
    if (localStorage.getItem('username')) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
    return this.loginStatus;
  }

  login(username: string) { // save username to localstorage
    localStorage.setItem('username', username);
  }

  collectPokemon(pokemon: any) { // save pokemon to list in localstorage
    this.collectedPokemons.push(pokemon);
    localStorage.setItem('collectedPokemon', JSON.stringify(this.collectedPokemons));
  }

  clearPokemonCollection() { // clear list of collected pokemons in localstorage
    this.collectedPokemons = [];
    localStorage.removeItem('collectedPokemon');
  }
  
}
