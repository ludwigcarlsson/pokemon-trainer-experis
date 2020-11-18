import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainerComponent,
    PokemonComponent,
    CatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
