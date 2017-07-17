import { gql } from 'react-apollo'

const inputPokemon = gql`
  input PokemonInput{
    id: String!
    name: String!
    nameJP: String!
    type: [String]
    species: String
    height: Float
    weight: Float
    generationId: Int!
  }
`

export default inputPokemon