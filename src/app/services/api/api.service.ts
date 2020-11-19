import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL: string = 'https://pokeapi.co/api/v2/pokemon';
  private limitOfPokemons : string = '10';

  constructor(private http:HttpClient) { }

  fetchAllPokemons(): Promise<any> {
    return this.http
      .get(this.BASE_URL +'?limit=' + this.limitOfPokemons)
      .toPromise();
  }

  fetchThis(URL: any): Promise<any> {
    return this.http
      .get(URL)
      .toPromise();
  }

}
