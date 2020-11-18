import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor() { }

  public pokemon: any;

  getData() {
    return this.pokemon;
  };
  setData(pokemon: any) {
    this.pokemon = pokemon;
  };
}
