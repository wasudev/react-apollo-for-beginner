import { ApolloClient, createNetworkInterface } from 'react-apollo'

const client = new ApolloClient({
   networkInterface: createNetworkInterface({ uri: 'http://localhost:3001/graphql'})
})

export default client