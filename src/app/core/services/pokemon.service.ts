import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PokemonList, PokemonBasicInfo } from '../models';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  constructor(private httpClient: HttpClient) { }

  public getPokemonList(): Observable<PokemonList> {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/?limit=807').pipe(map((pokemonList: PokemonList) => pokemonList));
  }

  public searchPokemonByName(name: string): Observable<PokemonBasicInfo[]> {
    return this.getPokemonList().pipe(
      map((pokemonList: PokemonList) => pokemonList.results
        .filter((pokemon: PokemonBasicInfo) => pokemon.name.includes(name.toLowerCase())).slice(0, 20)
      )
    )
  }
}
