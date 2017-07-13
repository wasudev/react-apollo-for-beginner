import React from 'react'
import { Row, Col } from 'antd' 

import ListItem from './ListItem'

const App = () => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <ListItem />
      </Col>
    </Row>
  )
}

export default App
