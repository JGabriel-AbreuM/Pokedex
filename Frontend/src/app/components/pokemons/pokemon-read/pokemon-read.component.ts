import { User } from './../../accounts/register.model';
import { Router } from '@angular/router';
import { Pokemon } from './../pokemon.model';
import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-read',
  templateUrl: './pokemon-read.component.html',
  styleUrls: ['./pokemon-read.component.css']
})
export class PokemonReadComponent implements OnInit {

  pokemons!: Pokemon[]

  user: User = {
    email: "",
    username: "",
    codigo: "",
    password: ""
  }

  displayedColumns = ['id', 'nome', 'num_pokemon', 'action']
  constructor(private pokemonService: PokemonService, private router: Router ) { }  

  ngOnInit(): void {
    this.pokemonService.read().subscribe(pokemons => {
      this.pokemons = pokemons,
      console.log(pokemons)
    })

  }

  NewPokemon(): void {
    console.log("yoo")
    this.router.navigate(["pokemon/create"])
  }



}
