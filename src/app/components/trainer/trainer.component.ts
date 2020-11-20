import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';
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

  constructor(private share: ShareDataService, private router: Router, private session: SessionService) {}

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
    this.session.clearPokemonCollection();
    this.router.navigateByUrl('/');
  }
}
