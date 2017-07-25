import { gql } from 'react-apollo'

const addedSubscription = gql`
  subscription {
    pokemonCreated {
      id
      name
      nameJP
      type
      species
      generationId
    }
  }
`

export {
  addedSubscription
}