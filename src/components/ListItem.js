import React from 'react'
import { Table, Avatar } from 'antd' 
import { gql, graphql } from 'react-apollo';

const columns = [{
  title: '',
  key: 'avatar',
  render: (text, record) => (
    <Avatar size="large" src={`http://assets.pokemon.com/assets/cms2/img/pokedex/full/${record.id}.png`} />
  )
}, {
  title: 'ID',
  dataIndex: 'id',
  key: 'id',
}, {
  title: 'English Name',
  dataIndex: 'name',
  key: 'name',
},{
  title: 'Japanese Name',
  dataIndex: 'nameJP',
  key: 'nameJP',
}, {
  title: 'Generation',
  dataIndex: 'generationId',
  key: 'generationId',
}]

const ListItem = ({ data: { loading, Pokemon } }) => {
  return (
    <div>
      {
        !loading 
        &&
        <Table dataSource={Pokemon} columns={columns} />
      }
    </div>
  )
}

const query = gql`
  query GetPokemon{
    Pokemon: getPokemon {
      id
      name
      nameJP
      generationId
      generation {
        region
      }
    }
  }
`

export default graphql(query)(ListItem)
