import React from 'react'
import { Col, Container, Row } from '@nans13/react-bs-grid'

const HeaderTpl = ({ appName, currentUser, logout }) => (
  <header id="header">
    <Container>
      <Row>
        <Col md={12}>
          {appName} - {currentUser && currentUser.pseudo}
        </Col>
      </Row>
    </Container>
  </header>
)

export default HeaderTpl
