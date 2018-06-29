import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Container, Row } from '@nans13/react-bs-grid'

import agent from '../agent'

import { MESSAGES } from '../fake'

import UserBadge from '../components/userBadge'

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

const MessageDisplay = ({
  content: { id, text, sender, date },
  removeMessage,
}) => (
  <Row className="message">
    <Col sm={1} className="col_user_badge">
      <UserBadge currentUser={sender} />
    </Col>
    <Col sm={9} className="messageContent">
      <div className="userName">{sender ? sender.name : 'john doe'}</div>
      <div className="content cutText">{text}</div>
      <div style={{ marginBottom: 10 }} className="messageDate">
        {date}
      </div>
    </Col>
    <Col sm={2} className="messageAction">
      <div style={{ marginTop: 20 }} onClick={() => removeMessage(id)}>
        X
      </div>
    </Col>
  </Row>
)
