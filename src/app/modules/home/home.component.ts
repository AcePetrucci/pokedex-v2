import { Component } from '@angular/core';

import { PokemonService } from 'src/app/core/services/pokemon.service';
import { Observable } from 'rxjs';
import { PokemonBasicInfo } from 'src/app/core/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent {

  pokemonResults$: Observable<PokemonBasicInfo[]>;

  constructor(private pokemonService: PokemonService) { }

  searchPokemon(name: string) {
    if (name === '') {
      this.pokemonResults$ = null;
      return false;
    }

    this.pokemonResults$ = this.pokemonService.searchPokemonByName(name);
  }

}
