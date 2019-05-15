import { Component, Input } from '@angular/core';
import { OnChange } from 'property-watch-decorator';

import { PokemonBasicInfo } from 'src/app/core/models';

@Component({
  selector: 'app-home-search-results',
  templateUrl: './home-search-results.component.html',
  styleUrls: ['./home-search-results.component.styl']
})
export class HomeSearchResultsComponent {

  @OnChange(function() { this.clonedPokemonResults = [ ...this.pokemonResults ]; })
  @Input() pokemonResults: PokemonBasicInfo[];

  clonedPokemonResults: PokemonBasicInfo[];

  constructor() { }

  getBackgroundColor(event, pokemon) {
    const colorThief = new (<any>window).ColorThief(); // tslint:disable-line
    pokemon.color = colorThief.getColor(event.target);
  }

}
