import { combineReducers } from 'redux'

import authReducer from './auth'
import articleReducer from './article'

const rootReducer = combineReducers({
  auth: authReducer,
  article: articleReducer,
})

export default rootReducer
