import { PokemonBasicInfo } from './pokemon-basic-info.model';

export interface PokemonList {
  count: number,
  next: string,
  previous: string,
  results: PokemonBasicInfo[]
}
