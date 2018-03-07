import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import { store, history } from './store'

import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import App from './containers/App'

import registerServiceWorker from './registerServiceWorker'

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
