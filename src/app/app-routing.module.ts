import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerComponent } from './components/trainer/trainer.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'trainer',
    component: TrainerComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'catalogue',
    component: CatalogueComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'pokemon/:name',
    component: PokemonComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
