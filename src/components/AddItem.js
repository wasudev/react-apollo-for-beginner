import React from 'react'
import { Col, Form, Input, Button, InputGroup, Select } from 'antd'

const types = [
  "Grass",
  "Poison",
  "Fire",
  "Flying",
  "Water",
  "Bug",
  "Normal",
  "Electric",
  "Ground"
]

class AddItem extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Col span={20} offset={2}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            <Input placeholder="No." />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Name English" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Name Japanese" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Species" />
          </Form.Item>
          <Form.Item>
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Type"
            > 
              {
                types.map((type,index) => <Select.Option key={`${index}`}>{type}</Select.Option>)
              }
            </Select>
          </Form.Item>
          <Form.Item>
            <Input.Group compact>
              <Input style={{ width: '50%' }} placeholder="Height" />
              <Input style={{ width: '50%' }} placeholder="Weight" />
            </Input.Group>
          </Form.Item>
          <Form.Item>
            <Input placeholder="Generation" />
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

export default Form.create()(AddItem);
