import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import App from './components/App'
import DetailItem from './components/DetailItem'

const routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/pokemons/:id" component={DetailItem}/>
    </div>
  </Router>
)

export default routes
