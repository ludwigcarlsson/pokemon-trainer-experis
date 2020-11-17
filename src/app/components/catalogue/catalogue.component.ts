import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  public pokemons: any = [];


  constructor(private api: ApiService) { }

  async displayCatalogue() {
    try {
      const data = await this.api.fetchAllPokemons();

      for (let i = 0; i < data.results.length; i++) {
        this.displayThisPokemon(data.results[i].url);
      }
  
    } catch (e) {
      console.log(e);
    }
  }

  async displayThisPokemon(URL: any) {
    try {
      const data = await this.api.fetchThisPokemon(URL)

      console.log(data);
      

      this.pokemons.push({
        name: data.name,
        height: data.height,
        weight: data.weight,
        abilities: data.abilities,
        sprite: data.sprites.front_default,
        img: data.sprites.other, // weird format, fråga Sean
        moves: data.moves,
        type: data.types,
        baseExp: data.base_experience,
        stats: data.stats
      });

    } catch (e) {
      console.log(e);
      
    }
  }

  ngOnInit(): void {
    this.displayCatalogue();
  }

}
