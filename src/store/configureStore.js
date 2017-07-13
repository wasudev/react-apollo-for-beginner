import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers'
import apolloClient from '../apollo'

const store = createStore(
  rootReducer,
  compose(
      applyMiddleware(apolloClient.middleware()),
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store


