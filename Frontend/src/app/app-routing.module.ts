import { PokemonDetailComponent } from './components/pokemons/pokemon-detail/pokemon-detail.component';
import { LoginComponent } from './components/accounts/login/login.component';
import { RegisterComponent } from './components/accounts/register/register.component';
import { OtpComponent } from './components/accounts/otp/otp.component';
import { PokemonDeleteComponent } from './components/pokemons/pokemon-delete/pokemon-delete.component';
import { PokemonCreateComponent } from './components/pokemons/pokemon-create/pokemon-create.component';
import { PokemonReadComponent } from './components/pokemons/pokemon-read/pokemon-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: OtpComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "pokemon",
    component: PokemonReadComponent
  },
  {
    path: "pokemon/create",
    component: PokemonCreateComponent
  },
  {
    path: "pokemon/delete/:id",
    component: PokemonDeleteComponent
  },
  {
    path: "pokemon/detail/:id",
    component: PokemonDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
