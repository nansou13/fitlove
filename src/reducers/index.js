import { combineReducers } from 'redux'

import common from './common'
import auth from './auth'
import users from './users'
import trainings from './trainings'
import selectedTrainingList from './selectedTrainingList'

const reducer = combineReducers({
  common,
  auth,
  users,
  trainings,
  selectedTrainingList,
})

export default reducer
