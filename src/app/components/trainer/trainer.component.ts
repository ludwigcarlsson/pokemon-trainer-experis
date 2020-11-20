import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/services/shareData/share-data.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss'],
})
export class TrainerComponent implements OnInit {
  public username: string = localStorage.getItem('username') || '';
  public pokemoncards: any = localStorage.getItem('collectedPokemon') ? JSON.parse(localStorage.getItem('collectedPokemon') || '') : [];
  public collectionStatus: boolean = false;

  constructor(private share: ShareDataService, private router: Router) {}

  ngOnInit(): void {
    if (this.pokemoncards.length > 0) {
      this.collectionStatus = true;
    }    
  }

  goToPokemon(pokemon: any) {
    this.share.setData(pokemon);
    this.router.navigateByUrl(`/pokemon/${pokemon.name}`);
  }

  clearPokemonCollection() {
    localStorage.removeItem('collectedPokemon');
    this.router.navigateByUrl('/');
  }
}
