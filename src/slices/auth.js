import Axios from '../axios'
import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  currentUser: null,
  errorMessage: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSuccess: (state, { payload }) => {
      state.currentUser = payload.user
      state.errorMessage = ''
    },
    authFailure: (state, { payload }) => {
      state.currentUser = null
      state.errorMessage = payload
    },
  },
})

const { actions, reducer } = authSlice
const { authSuccess, authFailure } = actions

export const selectAuth = state => state.auth

export const signInAsync = ({ email, password }) => async dispatch => {
  try {
    const res = await Axios.Auth.login(email, password)

    dispatch(authSuccess(res.data))
  } catch (error) {
    const { response, message } = error
    let errorMessage

    errorMessage = response
      ? response.data.errors
      : { [message]: 'connect your internet connection' }

    dispatch(authFailure(errorMessage))
  }
}

export const registerAsync = ({ username, email, password }) => async dispatch => {
  try {
    const res = await Axios.Auth.register(username, email, password)

    dispatch(authSuccess(res.data))
  } catch (error) {
    const { response, message } = error
    let errorMessage

    errorMessage = response
      ? response.data.errors
      : { [message]: 'connect your internet connection' }

    dispatch(authFailure(errorMessage))
  }
}

export default reducer
