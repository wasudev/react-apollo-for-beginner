import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import routes from './routes'
import apolloClient from './apollo'
import store from './store/configureStore'
import 'antd/dist/antd.css'

const Root = () => (
  <ApolloProvider store={store} client={apolloClient}>
    { routes() }
  </ApolloProvider>
) 

ReactDOM.render(<Root />, document.getElementById('root'))
