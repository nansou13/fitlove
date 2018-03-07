import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { promiseMiddleware, localStorageMiddleware } from './middleware'
import reducer from './reducers'

import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history)

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(
      myRouterMiddleware,
      promiseMiddleware,
      localStorageMiddleware
    )
  }
  // Enable additional logging in non-production environments.
  return applyMiddleware(
    myRouterMiddleware,
    promiseMiddleware,
    localStorageMiddleware,
    createLogger()
  )
}

const DEFAULT_STATE = {
  trainings: [
    {
      id: 1,
      title: 'Développé couché',
      description: 'description 01',
      image: 'image01',
      category: 'pecs',
    },
    {
      id: 4,
      title: 'Pull up',
      description: 'description 04',
      image: 'image04',
      category: 'pecs',
    },
    {
      id: 2,
      title: 'Développé militaire',
      description: 'description 02',
      image: 'image02',
      category: 'shoulder',
    },
    {
      id: 5,
      title: 'Elévations',
      description: 'description 05',
      image: 'image05',
      category: 'shoulder',
    },
    {
      id: 3,
      title: 'Biceps curl',
      description: 'description 03',
      image: 'image03',
      category: 'arms',
    },
    {
      id: 6,
      title: 'Tirage corde',
      description: 'description 06',
      image: 'image06',
      category: 'arms',
    },
  ],
}

// const enhancer = compose(
//   typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
//     ? window.__REDUX_DEVTOOLS_EXTENSION__()
//     : x => x
// )
export const store = createStore(
  reducer,
  DEFAULT_STATE,
  composeWithDevTools(getMiddleware())
)

// export const store = createStore(
//   reducer, DEFAULT_STATE, enhancer);
