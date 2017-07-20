import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import App from './components/App'
import DetailItem from './components/DetailItem'

const routes = () => (
  <Router>
    <div>
      <Route exact path="/pokemons" component={App}/>
      <Route exact path="/pokemons/:id" component={DetailItem}/>
      <Redirect from='/' to='/pokemons'/>
    </div>
  </Router>
)

export default routes
