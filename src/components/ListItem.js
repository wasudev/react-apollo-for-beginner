import React from 'react'
import { Col, Table, Avatar } from 'antd' 
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
  title: 'Type',
  key: 'type',
  render: (text, record) => (
    <div>{`${record.type.join(', ')}`}</div>
  )
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
        <Col span={20} offset={2}>
          <Table dataSource={Pokemon} columns={columns} />
        </Col>
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
      type
      generationId
      generation {
        region
      }
    }
  }
`

export default graphql(query)(ListItem)
