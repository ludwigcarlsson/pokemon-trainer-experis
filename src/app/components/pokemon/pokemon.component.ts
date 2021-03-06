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
    if (this.pokemon === undefined) { //Sends the user back to previous page when refreshing the page
      this.goBack();      
    } else {    
      for (let i = 0; i <= 1 ; i++){ 
        this.displayAbilityInformation(this.pokemon.abilities[i].ability.url); // Displays the two abilities for which a pokemon has
      }
      this.displayMoveInformation(this.pokemon.moves[0].move.url); //displays the information for a specific move for the targeted pokemon
      if (this.session.checkLogin()) {     //checks if the user is logged in or not
        this.loginStatus = true; 
      } else {
        this.loginStatus = false;
      }
    }
  }
      // sends the user back to previous page
  goBack() {
    this._location.back();
  }
    // Adds & displays the information in the movetable for the pokemon for when initialised, sets the index 0 as default value
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
    //changes the moveinformation depending on which move-option is selected in the dropdown list
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
    //Displays the name and description of the abilities for a specific pokemon
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
    // adds the specific pokemon to a local storage list for the user
  addPokemonToUserCollection(){
    const collectBtn: any = document.getElementById('collect-btn');
    
    if(!collectBtn.disabled) {
      this.session.collectPokemon(this.pokemon);
    }
    collectBtn.innerHTML = "Collected";
    collectBtn.disabled = true;
  }
}
