import { PokemonService } from './../pokemon.service';
import { Pokemon } from './../pokemon.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-create',
  templateUrl: './pokemon-create.component.html',
  styleUrls: ['./pokemon-create.component.css']
})
export class PokemonCreateComponent implements OnInit {

  pokemon: Pokemon = {
    nome: "",
  }
  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
  }

  PokemonCreate(): void {
    this.pokemonService.create(this.pokemon).subscribe(() => console.log('Pokemon cadastrado!'))
    this.router.navigate(["pokemon/"])
  }

  return(): void {
    this.router.navigate(["pokemon/"])
  }

}
