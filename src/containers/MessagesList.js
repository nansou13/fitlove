import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Container, Row } from '@nans13/react-bs-grid'

import agent from '../agent'

import { MESSAGES } from '../fake'

const mapStateToProps = ({ common: { currentUser } }) => ({
  currentUser,
})

const mapDispatchToProps = dispatch => ({})

class MessagesList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: MESSAGES,
    }

    this.removeMessage = id => {
      const newMessages = this.state.messages.filter(
        ({ id: currentID }) => currentID !== id
      )
      this.setState({ messages: newMessages })
    }
  }

  render() {
    const { messages } = this.state
    return (
      <Container className="MessagesList">
        {messages.map(message => (
          <MessageDisplay
            content={message}
            removeMessage={this.removeMessage}
          />
        ))}
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList)

const MessageDisplay = ({ content: { id, text, sender }, removeMessage }) => (
  <Row className="message">
    <Col sm={4} className="userPins" />
    <Col sm={6} className="messageContent">
      <div className="userName">{sender ? sender.name : 'john doe'}</div>
      <div className="content cutText">{text}</div>
      <div style={{ marginBottom: 10 }} className="messageDate">
        11-11-11111
      </div>
    </Col>
    <Col sm={2} className="messageAction">
      <div style={{ marginTop: 20 }} onClick={() => removeMessage(id)}>
        X
      </div>
    </Col>
  </Row>
)
