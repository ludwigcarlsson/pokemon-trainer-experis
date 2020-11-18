import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/services/shareData/share-data.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  constructor(private share: ShareDataService) { }

  public pokemon: any = this.share.getData();

  ngOnInit(): void {
    console.log(this.pokemon);
  }

}
