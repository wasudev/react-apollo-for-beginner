import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import apolloClient from './apollo'
import App from './components/App'
import store from './store/configureStore'
import 'antd/dist/antd.css'

const Root = () => (
  <ApolloProvider store={store} client={apolloClient}>
    <App />
  </ApolloProvider>
) 

ReactDOM.render(<Root />, document.getElementById('root'))
