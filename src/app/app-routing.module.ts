import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerComponent } from './components/trainer/trainer.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {
    path: 'trainer',
    component: TrainerComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'catalogue',
    component: CatalogueComponent
  },
  {
    path: 'pokemon/:name',
    component: PokemonComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
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
