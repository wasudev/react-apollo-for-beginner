import React from 'react'
import { Row, Col, Tabs } from 'antd' 

import ListItem from './ListItem'
import AddItem from './AddItem'

const App = () => {
  return (
    <Row>
      <Col span={6}>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Pokemon" key="1"><AddItem /></Tabs.TabPane>
          <Tabs.TabPane tab="Generation" key="2">Content of Tab Pane 2</Tabs.TabPane>
        </Tabs>
      </Col>
      <Col span={18}>
        <ListItem />
      </Col>
    </Row>
  )
}

export default App
