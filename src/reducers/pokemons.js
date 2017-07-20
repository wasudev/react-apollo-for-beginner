import { FETCH_POKEMONS_SUCCESS } from '../constants/actionTypes'

const initialState = []

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_SUCCESS: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default pokemonsReducer