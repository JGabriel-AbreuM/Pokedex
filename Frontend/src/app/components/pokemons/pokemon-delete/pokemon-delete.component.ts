import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from './../pokemon.service';
import { Pokemon } from './../pokemon.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-delete',
  templateUrl: './pokemon-delete.component.html',
  styleUrls: ['./pokemon-delete.component.css']
})
export class PokemonDeleteComponent implements OnInit {
  pokemon!: Pokemon;

  constructor( private pokemonService: PokemonService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.pokemonService.readID(id!).subscribe(pokemon => {this.pokemon = pokemon})
  }

  deletePokemon(): void {
    this.pokemonService.delete(this.pokemon).subscribe(() => {
      this.router.navigate(["pokemon/"])
    })
  }
  
  return(): void {
    this.router.navigate(["pokemon/"])
  }
}
