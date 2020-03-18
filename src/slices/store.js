import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import rootReducer from './rootReducer'

const devMode = process.env.NODE_ENV === 'development'

const middleware = [...getDefaultMiddleware()]
devMode && middleware.push(logger)

const store = configureStore({
  reducer: rootReducer,
  devTools: devMode,
  middleware,
})

export default store
