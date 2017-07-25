import React from 'react'
import { Col, Form, Input, Button, Select } from 'antd'
import { graphql, compose } from 'react-apollo'

import { queryPokemon } from '../queries/pokemon'
import { addMutation } from '../mutations/pokemon'

const types = [
  "Bug",
  "Electric",
  "Fairy",
  "Fighting",
  "Fire",
  "Flying",
  "Grass",
  "Ground",
  "Normal",
  "Poison",
  "Psychic",
  "Water"
]

class AddItem extends React.Component {
  state = {
    id: '',
    name: '',
    nameJP: '',
    species: '',
    height: 0.0,
    weight: 0.0,
    type: [],
    generationId: 0.0,
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addPokemon({ 
      variables: { 
        input: {
          id: this.state.id,
          name: this.state.name,
          nameJP: this.state.nameJP,
          species: this.state.species,
          type: this.state.type,
          height: this.state.height,
          weight: this.state.weight,
          generationId: this.state.generationId
        }
      },
      update: (store, { data: { addPokemon }}) => {
        const data = store.readQuery({query: queryPokemon })
        console.log(addPokemon)
        if (!data.payload.data.find((pokemon) => pokemon.id === addPokemon.id)) {
          data.payload.data.push(addPokemon)
          store.writeQuery({ query: queryPokemon, data })
        }
      }
    })
      .then((res) => {
        this.setState({
          id: '',
          name: '',
          nameJP: '',
          species: '',
          height: 0.0,
          weight: 0.0,
          type: [],
          generationId: 0.0,
        })
      } 
    )
  }
  
  onChangeType = (value) => {
    this.setState({
      type: value
    })
  }

  render() {
    return (
      <Col span={20} offset={2}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            <Input placeholder="No." onChange={(event) => { this.setState({ id: event.target.value }) }} value={this.state.id} />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Name English" onChange={(event) => { this.setState({ name: event.target.value }) }} value={this.state.name} />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Name Japanese" onChange={(event) => { this.setState({ nameJP: event.target.value }) }} value={this.state.nameJP} />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Species" onChange={(event) => { this.setState({ species: event.target.value }) }} value={this.state.species} />
          </Form.Item>
          <Form.Item>
            <Select
              value={this.state.type}
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Type"
              onChange={this.onChangeType}
              notFoundContent="Not Found"
            > 
              {
                types.map((type,index) => <Select.Option key={`${index}`} value={type}>{type}</Select.Option>)
              }
            </Select>
          </Form.Item>
          <Form.Item>
            <Input.Group compact>
              <Input style={{ width: '50%' }} placeholder="Height" onChange={(event) => { this.setState({ height: event.target.value }) }} value={this.state.height} />
              <Input style={{ width: '50%' }} placeholder="Weight" onChange={(event) => { this.setState({ weight: event.target.value }) }} value={this.state.weight} />
            </Input.Group>
          </Form.Item>
          <Form.Item>
            <Input placeholder="Generation" onChange={(event) => { this.setState({ generationId: event.target.value }) }} value={this.state.generationId} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" ghost>
              Create
            </Button>
          </Form.Item>
        </Form>
      </Col>
    );
  }
}

export default compose(
  graphql(addMutation, { name: 'addPokemon'}),
)(AddItem);
