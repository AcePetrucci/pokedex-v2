import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { PokemonService } from 'src/app/core/services/pokemon.service';

import { PokemonList, PokemonBasicInfo } from 'src/app/core/models';

@Injectable()
export class HomePokemonService {
  constructor(
    private httpClient: HttpClient,
    private pokemonService: PokemonService,
  ) { }

  public searchPokemonByName(search: string): Observable<PokemonBasicInfo[]> {
    return this.pokemonService.searchPokemonByName(search).pipe(
      map((pokemonResults: PokemonBasicInfo[]) => this.identifyPokemonSearchString(search, pokemonResults))
    );
  }

  private identifyPokemonSearchString(search: string, pokemonResults: PokemonBasicInfo[]): PokemonBasicInfo[] {
    return pokemonResults.map(pokemon => {
      const clonedPokemon = { ...pokemon };
      clonedPokemon.exhibitionName = clonedPokemon.name.replace(search, `<strong>${search}</strong>`);
      return clonedPokemon;
    });
  }
}
