import { Link } from 'react-router-dom'
// import ListErrors from './ListErrors';
import React from 'react'
import agent from '../agent'
import { connect } from 'react-redux'
import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED,
} from '../constants/actionTypes'

const mapStateToProps = state => ({ ...state.auth })

const mapDispatchToProps = dispatch => ({
  onSubmit: (pseudo, password) =>
    dispatch({ type: LOGIN, payload: agent.Auth.login(pseudo, password) }),
})

class Visitor extends React.Component {
  constructor() {
    super()
    this.changePseudo = ev => this.setState({ pseudo: ev.target.value })
    this.changePassword = ev => this.setState({ password: ev.target.value })
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
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <Link to="/register">Need an account?</Link>
              </p>

              {/* <ListErrors errors={this.props.errors} /> */}

              <form onSubmit={this.submitForm(pseudo, password)}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Pseudo"
                      value={pseudo}
                      onChange={this.changePseudo}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.changePassword}
                    />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={this.props.inProgress}
                  >
                    Sign in
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Visitor)
