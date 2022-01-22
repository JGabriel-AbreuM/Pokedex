import { Login } from './../accounts/login.model';
import { User } from './../accounts/register.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = "http://127.0.0.1:8000/api/pokeagenda"


  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showOnConsole(msg: string): void {
    console.log(msg)
  };

  readID(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/${id}`)
  }

  delete(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.delete<Pokemon>(`${this.baseUrl}/${pokemon.id}`)
  }

  read(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.baseUrl)
  };

  create(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.baseUrl+'/register', pokemon)
  };

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, '', {
      duration: 1500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['sb-error'],
    })
  }
}