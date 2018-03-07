import {
  ADD_TRAINING,
  REMOVE_TRAINING,
  START_TRAINING_SELECTED_LIST,
} from '../constants/actionTypes'

/* const defaultState = {
  filterText: '',
  list: []
}; */

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TRAINING:
      /*  console.log(action)
      const { list } = action.payload
      return {...state,
        list: (state.list || []).concat([list])
      }
      */
      const training = action.payload
      return [...state, training]
    case REMOVE_TRAINING:
      return state.filter(({ id }) => id !== action.payload.id)
    case START_TRAINING_SELECTED_LIST:
    default:
      return state
  }
}
