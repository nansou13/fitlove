import {
  APP_LOAD,
  REDIRECT,
  LOGIN,
  LOGOUT,
  FORM_VALIDATE,
  REGISTER,
} from '../constants/actionTypes'

const defaultState = {
  appName: 'Fitsocial',
  token: null,
  viewChangeCounter: 0,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : null,
      }
    case FORM_VALIDATE:
      return {
        ...state,
        currentUser: { ...state.currentUser, ...action.payload.user },
      }
    case REGISTER:
      return {
        ...state,
        redirectTo: action.payload ? '/' : null,
        currentUser: action.payload ? action.payload.user : null,
      }
    case LOGIN:
      return {
        ...state,
        // redirectTo: action.error ? null : '/',
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user,
      }
    case REDIRECT:
      return { ...state, redirectTo: null }
    case LOGOUT:
      return { ...state, redirectTo: '/', token: null, currentUser: null }
    default:
      return state
  }
}
