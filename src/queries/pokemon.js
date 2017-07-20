import { gql } from 'react-apollo'

const query = gql`
  query GetPokemon{
    payload: getPokemon {
      data {
        id
        name
        nameJP
        type
        species
        generationId
      }
    }
  }
`

const queryById = gql`
  query GetPokemonById($id : String!) {
    payload: getPokemonById(id: $id) {
      data {
        id
        name
        nameJP
        type
        species
        generationId
        generation {
          region
        }
      }
    }
  }
`

export { 
  query as queryPokemon,
  queryById as queryPokemonById
}