import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerComponent } from './components/trainer/trainer.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';


const routes: Routes = [
  {
    path: 'trainer',
    component: TrainerComponent
  },
  {
    path: 'catalogue',
    component: CatalogueComponent
  },
  {
    path: 'pokemon/:id',
    component: PokemonComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
