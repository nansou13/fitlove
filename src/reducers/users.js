import { GET_USERS_LIST } from '../constants/actionTypes'

const defaultState = {
  selected: {},
  list: [],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        list: action.payload ? action.payload.users : null,
      }
    default:
      return state
  }
}
