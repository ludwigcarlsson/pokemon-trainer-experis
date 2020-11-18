import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/services/shareData/share-data.service';
 
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  public pokemons: any = [];
  public currentPokemon: any = [];

  constructor(private api: ApiService, private router: Router, private share: ShareDataService) { }

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
      
      this.pokemons.push({
        name: data.name,
        height: data.height,
        weight: data.weight,
        abilities: data.abilities,
        sprite: data.sprites.front_default,
        img: data.sprites.other['official-artwork'].front_default, 
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

  showPokemon(pokemon: any) {
    const image = document.getElementById("pokemon-image");   
    const element = document.getElementById(pokemon.name);
    const detailsBtn: any = document.getElementById("details-btn");

    detailsBtn.style.display = "block";

    document.querySelector(".active")?.classList.remove("active");
    element?.classList.add("active");
     
    this.currentPokemon = [];
    this.currentPokemon = pokemon;

    image?.setAttribute("src", pokemon.img);
  }

  goToPokemon(pokemon: any) {
    this.share.setData(pokemon);
    this.router.navigateByUrl(`/pokemon/${pokemon.name}`)
  }

}
