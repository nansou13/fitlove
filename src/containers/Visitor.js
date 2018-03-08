import { Link } from 'react-router-dom'

import React from 'react'
import { connect } from 'react-redux'

import agent from '../agent'

import { Col, Container, Row } from '@nans13/react-bs-grid'

import { LOGIN } from '../constants/actionTypes'

const mapStateToProps = state => ({ ...state.auth })

const mapDispatchToProps = dispatch => ({
  onSubmit: (pseudo, password) =>
    dispatch({ type: LOGIN, payload: agent.Auth.login(pseudo, password) }),
})

class Visitor extends React.Component {
  constructor() {
    super()
    this.handleChange = id => ev => this.setState({ [id]: ev.target.value })

    this.submitForm = (pseudo, password) => ev => {
      ev.preventDefault()
      this.props.onSubmit(pseudo, password)
    }

    this.state = {
      pseudo: '',
      password: '',
    }
  }

  render() {
    const { pseudo, password } = this.state

    return (
      <Container className="auth-page">
        <Row>
          <Col md={6} mdOffset={3} xs={12}>
            <h1>Sign In</h1>
            <p>
              <Link to="/register">Need an account?</Link>
            </p>
            {/* <ListErrors errors={this.props.errors} /> */}
            <form onSubmit={this.submitForm(pseudo, password)}>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Pseudo"
                value={pseudo}
                onChange={this.handleChange('pseudo')}
              />

              <input
                className="form-control form-control-lg"
                type="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange('password')}
              />

              <button
                className="btn btn-lg btn-primary pull-xs-right"
                type="submit"
                disabled={this.props.inProgress}
              >
                Sign in
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Visitor)
