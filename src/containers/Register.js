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

class Register extends React.Component {
  constructor() {
    super()
    this.handleChange = id => ({ target }) => {
      const value = target.type === 'checkbox' ? target.checked : target.value
      this.setState({ [id]: value })
    }

    this.submitForm = state => ev => {
      ev.preventDefault()
      console.log(state)
      // this.props.onSubmit(pseudo, password)
    }

    this.state = {
      pseudo: '',
      sexe: '1',
      orientation: '1',
      city: '',
      birthdate: '',
      password: '',
    }
  }

  render() {
    const { pseudo, sexe, orientation, city, birthdate, password } = this.state
    return (
      <Container className="register-page">
        <Row>
          <Col md={6} mdOffset={3} xs={12}>
            <h1>Register</h1>
            <p>
              <Link to="/login">have an account?</Link>
            </p>
            {/* <ListErrors errors={this.props.errors} /> */}
            <form onSubmit={this.submitForm(this.state)}>
              <input
                type="text"
                placeholder="Pseudo"
                value={pseudo}
                onChange={this.handleChange('pseudo')}
              />
              <br />
              <input
                name="sexe"
                type="radio"
                value={1}
                checked={sexe === '1'}
                onChange={this.handleChange('sexe')}
              />{' '}
              Homme
              <input
                name="sexe"
                type="radio"
                value={2}
                checked={sexe === '2'}
                onChange={this.handleChange('sexe')}
              />
              Femme
              <br />
              <select onChange={this.handleChange('orientation')}>
                <option selected={orientation === '1'} value={1}>
                  Homme
                </option>
                <option selected={orientation === '2'} value={2}>
                  Femme
                </option>
                <option selected={orientation === '3'} value={3}>
                  Les deux...
                </option>
              </select>
              <br />
              <input
                type="text"
                placeholder="Ville"
                value={city}
                onChange={this.handleChange('city')}
              />
              <br />
              <input
                type="text"
                placeholder="Date de naissance"
                value={birthdate}
                onChange={this.handleChange('birthdate')}
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange('password')}
              />
              <button type="submit" disabled={this.props.inProgress}>
                Sign in
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
