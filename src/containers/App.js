import React, { Component } from 'react'

import agent from '../agent'

import { connect } from 'react-redux'
import { APP_LOAD, REDIRECT, LOGOUT } from '../constants/actionTypes'
import { Route, Switch } from 'react-router-dom'

import '../App.css'
import Template from './templates'
import CreateProgram from './CreateProgram'
import Brouillon from './Brouillon'
import Register from './Register'
import Visitor from './Visitor'
import Home from './Home'
import UserProfil from './UserProfil'
import EditProfile from './EditProfile'

import { store } from '../store'
import { push } from 'react-router-redux'

import { sendMessage, getOnSocket } from '../socket'

const mapStateToProps = state => ({
  appLoaded: state.common.appLoaded,
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo,
})

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () => dispatch({ type: REDIRECT }),
  onClickLogout: e => {
    e.preventDefault()
    dispatch({ type: LOGOUT })
  },
})

class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      store.dispatch(push(nextProps.redirectTo))
      this.props.onRedirect()
    }
  }

  componentWillMount() {
    const token = window.localStorage.getItem('jwt')
    if (token) {
      agent.setToken(token)
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token)

    getOnSocket()
  }

  render() {
    const { appLoaded, appName, currentUser, onClickLogout } = this.props

    if (currentUser) {
      sendMessage('loggedUser', currentUser.id)
      console.log('tototootototo')
    }

    if (appLoaded) {
      return (
        <Template
          appName={appName}
          currentUser={currentUser}
          logout={onClickLogout}
        >
          <Switch>
            <Route exact path="/" component={currentUser ? Home : Visitor} />
            <Route exact path="/login" component={Visitor} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/user/:id" component={UserProfil} />
            <Route exact path="/account" component={EditProfile} />
            <Route path="/training" component={CreateProgram} />
            <Route path="/old" component={Brouillon} />
          </Switch>
        </Template>
      )
    }
    // page de chargement...
    return <div>loading...</div>
    // return (
    //   <div>
    //     <Header
    //       appName={this.props.appName}
    //       currentUser={this.props.currentUser} />
    //   </div>
    // );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
