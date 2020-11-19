import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ShareDataService } from 'src/app/services/shareData/share-data.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  constructor(private share: ShareDataService, private _location: Location) { }

  public pokemon: any = this.share.getData();

  ngOnInit(): void {
    console.log(this.pokemon);
  }


  goBack() {
    this._location.back();
  }
}
