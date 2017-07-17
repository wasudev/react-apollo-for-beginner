import { combineReducers } from 'redux'

import apolloClient from '../apollo'
import pokemons from './pokemons'

const rootReducer = combineReducers({
  apollo: apolloClient.reducer(),
  pokemons,
})

export default rootReducer