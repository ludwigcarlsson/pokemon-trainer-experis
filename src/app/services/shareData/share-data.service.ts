import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor() {}

  // A service for sharing data between components

  public pokemon: any;

  getData() {
    return this.pokemon;
  };
  setData(pokemon: any) {
    this.pokemon = pokemon;
  };
}
