import { gql } from 'react-apollo'

const addMutation = gql`
  mutation AddPokemon(
    $id: String!, 
    $name: String!,
    $nameJP: String!,
    $type: [String],
    $species: String,
    $weight: Float,
    $height: Float,
    $generationId: Int!
  ) {
    addPokemon(
      input: {
        id: $id
        name: $name
        nameJP: $nameJP
        type: $type
        species: $species
        weight: $weight
        height: $height
        generationId: $generationId
      }
    ) {
      id
      name
      nameJP
    }
  }
`

const deleteMutation = gql`
  mutation DeletePokemon($id: String!) {
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