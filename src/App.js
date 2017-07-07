import React from 'react'
import { Table, Row, Col, Avatar } from 'antd' 
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
  title: 'Japanese Name',
  dataIndex: 'nameJP',
  key: 'nameJP',
}, {
  title: 'Generation',
  dataIndex: 'generationId',
  key: 'generationId',
}];

const App = ({ data: { loading, Pokemon } }) => {
  return (
    <Row>
      {
        !loading 
        &&
        <Col span={12} offset={6}>
          <Table dataSource={Pokemon} columns={columns} />
        </Col>
      }
    </Row>
  )
}

export default graphql(gql`
  query {
    Pokemon: getPokemon {
      id
      nameJP
      generationId
    }
  }
`)(App)
