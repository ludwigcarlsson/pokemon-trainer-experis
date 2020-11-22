import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL: string = 'https://pokeapi.co/api/v2/pokemon';
  private limitOfPokemons : string = '10';

  constructor(private http:HttpClient) { }
  // Fetches data for ten entries from the pokeapi.
  fetchAllPokemons(): Promise<any> {
    return this.http
      .get(this.BASE_URL +'?limit=' + this.limitOfPokemons)
      .toPromise();
  }
  // A generic function which fetches specific data from an url.
  fetchThis(URL: any): Promise<any> {
    return this.http
      .get(URL)
      .toPromise();
  }

}
