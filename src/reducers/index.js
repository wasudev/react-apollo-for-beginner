import { combineReducers } from 'redux'

import apolloClient from '../apollo'

const rootReducer = combineReducers({
  apollo: apolloClient.reducer(),
})

export default rootReducer