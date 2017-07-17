import { FETCH_POKEMONS_SUCCESS } from '../constants/actionTypes'

const fetchPokemonSuccess = (pokemons) => ({
  type: FETCH_POKEMONS_SUCCESS,
  payload: pokemons
})

export {
  fetchPokemonSuccess
}