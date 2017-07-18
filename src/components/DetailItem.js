import React from 'react'
import { graphql } from 'react-apollo'
import { Card, Col, Row } from 'antd'

import { queryPokemonById } from '../queries/pokemon'

const DetailItem = (props) => {
  const { 
      loading,
      payload
    } = props
   if (loading) {
    return (
      <div>
        Loading
      </div>
    )
  }
  return (
    <Row>
      <Col span={8} offset={8}>
        <Card bodyStyle={{ padding: 0 }} title={payload.data.name}>
          <div className="custom-image">
            <img alt="example" width="100%" src={`http://assets.pokemon.com/assets/cms2/img/pokedex/full/${payload.data.id}.png`} />
          </div>
          <div className="custom-card">
            <h3>{payload.data.nameJP}</h3>
            <p>{`${payload.data.type.join(', ')}`}</p>
          </div>
        </Card>
      </Col>
    </Row>
  )
}

export default graphql(queryPokemonById, {
  options: (props) => ({
      variables: { 
        id: props.match.params.id
      }
    }),
  props: ({ ownProps, data: { loading, payload } }) => ({
    loading,
    payload
  })
})(DetailItem)