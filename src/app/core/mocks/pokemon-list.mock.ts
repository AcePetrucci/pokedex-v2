import { PokemonList } from '../models';

export const pokemonListMock: PokemonList = {
  count: 10,
  next: null,
  previous: null,
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/'
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/'
    },
    {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/3/'
    },
    {
      name: 'charmander',
      url: 'https://pokeapi.co/api/v2/pokemon/4/'
    }
  ]
}
