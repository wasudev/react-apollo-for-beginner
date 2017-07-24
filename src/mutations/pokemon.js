import { gql } from 'react-apollo'

const addMutation = gql`
  mutation addPokemon($input: PokemonInput!) {
    addPokemon(input: $input) {
      id
      name
      nameJP
      type
      species
      generationId
    }
  }
`

const deleteMutation = gql`
  mutation deletePokemon($id: String!) {
    deletePokemon(
      id: $id
    ) {
      status
      message
    }
  }
`

export {
  addMutation,
  deleteMutation
}