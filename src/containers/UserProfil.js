import React, { Component } from 'react'

import { sendMessage } from '../socket'

export default class UserProfil extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    sendMessage('visite', this.props.match.params.id)
  }

  render() {
    const user_id = this.props.match.params.id

    return (
      <div className="UserProfil">
        <div className="container">
          <div className="row">page du user {user_id}</div>
        </div>
      </div>
    )
  }
}
