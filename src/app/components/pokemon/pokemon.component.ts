import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { SessionService } from 'src/app/services/session/session.service';
import { ShareDataService } from 'src/app/services/shareData/share-data.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  constructor(private share: ShareDataService, private _location: Location, private api: ApiService, private session: SessionService) { }

  public loginStatus: boolean = false;
  public pokemon: any = this.share.getData();
  public moveInformationList : any = [];
  public abilities : any = [];
  public selectedMove: any;

  ngOnInit(): void {
    for (let i = 0; i <= 1 ; i++){
      this.displayAbilityInformation(this.pokemon.abilities[i].ability.url);
    }
    this.displayMoveInformation(this.pokemon.moves[0].move.url);
    if (this.session.checkLogin()) {
      this.loginStatus = true; 
    } else {
      this.loginStatus = false;
    }
  }

  goBack() {
    this._location.back();
  }

  initInformation() {
    const moveTypeCell: any = document.getElementById('moveType');
    const descriptionCell: any = document.getElementById('description');
    const effectCell: any = document.getElementById('effect');
    const accuracyCell: any = document.getElementById('accuracy');
    const damageCell: any = document.getElementById('damage');
    
    moveTypeCell.innerHTML = this.moveInformationList[0].moveType;
    descriptionCell.innerHTML = this.moveInformationList[0].description;
    effectCell.innerHTML = this.moveInformationList[0].effect;
    accuracyCell.innerHTML = this.moveInformationList[0].accuracy;
    damageCell.innerHTML = this.moveInformationList[0].damage;
  }

  async displayMoveInformation(URL: any){
    try {
      const data = await this.api.fetchThis(URL);
      this.moveInformationList = [];
      this.moveInformationList.push({
        moveType: data.type.name,
        description: data.flavor_text_entries[1].flavor_text,
        effect: data.effect_entries[0].effect,
        accuracy: data.accuracy,
        damage: data.power
      });
      
      this.initInformation();
      
    }
    catch(e){
      console.log(e)
    }
  }

   async displayAbilityInformation(URL: any){
    try {
      const data = await this.api.fetchThis(URL);

      this.abilities.push({
        name: data.name,
        description: data.flavor_text_entries[0].flavor_text
      });
    }
    catch(e){
      console.log(e)
    }
  }

  addPokemonToUserCollection(){
    const collectBtn: any = document.getElementById('collect-btn');
    
    if(!collectBtn.disabled) {
      this.session.collectPokemon(this.pokemon);
    }
    collectBtn.innerHTML = "Collected";
    collectBtn.disabled = true;
  }
}
