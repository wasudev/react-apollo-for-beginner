import React from 'react'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { Card, Col, Row, Button } from 'antd'

import { queryPokemonById } from '../queries/pokemon'
import { increaseLikeSuccess } from '../actions/like'

class DetailItem extends React.Component {
  render() {
    const { 
      loading,
      payload
    } = this.props
    if (loading) {
      return (
        <div>
          Loading
        </div>
      )
    }  
    console.log(this.props)  
    return (
      <Row>
        <Col span={1} offset={7}>
          <Button shape="circle" icon="left" onClick={this.props.history.goBack} />
        </Col>
        <Col span={8}>
          <Card bodyStyle={{ padding: 0 }} title={payload.data.name}>
            <img alt="example" width="100%" src={`http://assets.pokemon.com/assets/cms2/img/pokedex/full/${payload.data.id}.png`} />
            <div style={{ paddingLeft: 15,paddingBottom: 15 }}>
              <Button type="primary" icon="like" ghost onClick={this.props.increaseLikeSuccess} > {this.props.like} likes</Button>
            </div>
          </Card>
        </Col>
      </Row>
    )
  }
}

const DetailItemWrappedWithApollo = graphql(queryPokemonById, {
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

const mapStateToprops = state => ({
  like: state.like
})

const mapDispatchToprops =  dispatch => ({
  increaseLikeSuccess: () => dispatch(increaseLikeSuccess())
})

export default connect(mapStateToprops, mapDispatchToprops)(DetailItemWrappedWithApollo)