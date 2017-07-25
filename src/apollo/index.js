import { 
  ApolloClient, 
  createNetworkInterface 
} from 'react-apollo'
import { 
  SubscriptionClient, 
  addGraphQLSubscriptions 
} from 'subscriptions-transport-ws'

const networkInterface = createNetworkInterface({ uri: 'http://localhost:3001/graphql' })


const wsClient = new SubscriptionClient(`ws://localhost:3001/subscriptions`, {
  reconnect: true,
})

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient,
)

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
})


export default client