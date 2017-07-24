import { gql } from 'react-apollo'

const query = gql`
  query getPokemon{
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
  query getPokemonById($id : String!) {
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