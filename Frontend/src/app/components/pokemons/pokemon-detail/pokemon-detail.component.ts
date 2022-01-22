import { PokemonService } from './../pokemon.service';
import { Pokemon } from './../pokemon.model';
import { AccountsService } from './../../accounts/accounts.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon!: Pokemon

  constructor(private pokemonService: PokemonService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.pokemonService.readID(id!).subscribe(pokemon => {this.pokemon = pokemon})
  }

  return(): void {
    this.router.navigate(["pokemon"])
  }
}
