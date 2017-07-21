import { combineReducers } from 'redux'

import apolloClient from '../apollo'
import like from './like'

const rootReducer = combineReducers({
  apollo: apolloClient.reducer(),
  like
})

export default rootReducer