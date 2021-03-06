import React from 'react'
import { Col, Table, Avatar, Popconfirm } from 'antd' 
import { graphql, compose } from 'react-apollo'
import { Link } from 'react-router-dom'

import { queryPokemon } from '../queries/pokemon'
import { deleteMutation } from '../mutations/pokemon'
import { addedSubscription } from '../subscription/pokemon'

class ListItem extends React.Component {

  componentWillMount() {
    this.props.data.subscribeToMore({
      document: addedSubscription,
      updateQuery: (prev, {subscriptionData}) => {
        if (!subscriptionData.data) {
          return prev
        }
        if (!prev.payload.data.find((pokemon) => pokemon.id === subscriptionData.data.pokemonCreated.id)) {
          const newPokemons = [
            ...prev.payload.data,
            subscriptionData.data.pokemonCreated
          ]
          return {
            ...prev,
            payload: {
              ...prev.payload,
              data: newPokemons
            }
          }
        }
        return prev
      }
    })
  }

  deleteData = (id) => {
    this.props.deletePokemon({ variables: { id } })
      .then(() => this.props.data.refetch())
  }

  render() { 
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
    }, {
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
      title: 'Species',
      dataIndex: 'species',
      key: 'species',
    }, {
      title: 'Generation',
      dataIndex: 'generationId',
      key: 'generationId',
    }, {
      title: '',
      key: 'action',
      render: (text, record) => (
        <span>
          <Link to={`pokemons/${record.id}`}>View</Link>
          <span className="ant-divider" />
          <Popconfirm title="Sure to delete?" okText="Yes" cancelText="No" onConfirm={() => this.deleteData(`${record.id}`)}>
            <a>Delete</a>
          </Popconfirm>
        </span>
      ),
    }]

    const {
      data: {
        loading,
        payload,
      } 
    } = this.props

    if (loading) {
      return (
        <div>
          <Col span={20} offset={2}>
            Loading
          </Col>
        </div>
      )
    }

    return (
      <div>
        {
          <Col span={20} offset={2}>
            <Table dataSource={payload.data} columns={columns} />
          </Col>
        }
      </div>
    )
  }
}

const ListItemApolloWrappedWithApollo  = compose(
  graphql(queryPokemon, { name: 'getPokemon' }),
  graphql(deleteMutation, { name: 'deletePokemon' }),
)(ListItem)

export default ListItemApolloWrappedWithApollo
