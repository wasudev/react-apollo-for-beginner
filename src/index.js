import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'

import 'antd/dist/antd.css'
import App from './App'

const client = new ApolloClient({
   networkInterface: createNetworkInterface({ uri: 'http://localhost:3001/graphql'})
})

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
) 

ReactDOM.render(<Root />, document.getElementById('root'))
