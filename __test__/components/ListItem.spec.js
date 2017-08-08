import React from 'react'
import { shallow } from 'enzyme'
import { 
  ApolloClient, 
  ApolloProvider,
  gql,
} from 'react-apollo'
 import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils'
 import { MockedProvider } from 'react-apollo/lib/test-utils'

import ListItem from '../../src/components/ListItem'
import { queryPokemon } from '../../src/queries/pokemon'

describe('[Unit] CommentBox Component', () => {
  describe('Should have correct property', () => {
    it('Should ', () => {
      const query  = gql`
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
      const data = {
        loading: true,
        payload: {
          data: [
            {
              id: '001',
              name: 'Bulbasaur',
              nameJP: 'Fushigidane',
              type: 'Seed Pokemon',
              species: [
                'Grass',
                'Posion'
              ],
              generationId: 1
            },
            {
              id: '002',
              name: 'Ivysaur',
              nameJP: 'Fushigisou',
              type: 'Seed Pokemon',
              species: [
                'Grass',
                'Posion'
              ],
              generationId: 1
            },
          ]
        }
      }
      // const networkInterface = mockNetworkInterfaceWithSchema({ 
      //   request: { 
      //     query
      //   }, 
      //   result: { 
      //     data 
      //   } 
      // })

      // To fix TypeError: Cannot read property 'ReactCurrentOwner' of undefined
      // https://github.com/apollographql/react-apollo/issues/826

      // const client = new ApolloClient({ networkInterface })
      // const wrapper = shallow(
      //   <ApolloProvider client={client}>
      //     <ListItem data={data} />
      //   </ApolloProvider>
      // )
      const mocks = [
        {
          request: {
            query
          },
          result: {
            data
          }
        },
      ]
      const wrapper = shallow(
        <MockedProvider mocks={mocks}>
          <ListItem />
        </MockedProvider>
      )
      console.log(wrapper.props())
    })
  })
})