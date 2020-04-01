import Axios from '../axios'
import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  currentUser: null,
  errors: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSuccess: (state, { payload }) => {
      state.currentUser = payload.user
      state.errors = null
    },
    authFailure: (state, { payload }) => {
      state.currentUser = null
      state.errors = payload
    },
    logout: state => {
      state.currentUser = null
      state.errors = null
    },
  },
})

const { actions, reducer } = authSlice
export const { authSuccess, authFailure, logout } = actions

export const selectAuth = state => state.auth

const handleAuthErrors = error => {
  const { response, message } = error

  return response ? response.data.errors : { [message]: 'connect your internet connection' }
}

export const signInAsync = ({ email, password }) => async dispatch => {
  try {
    const res = await Axios.Auth.login(email, password)

    dispatch(authSuccess(res.data))
  } catch (error) {
    const errors = handleAuthErrors(error)

    dispatch(authFailure(errors))
  }
}

export const registerAsync = ({ username, email, password }) => async dispatch => {
  try {
    const res = await Axios.Auth.register(username, email, password)

    dispatch(authSuccess(res.data))
  } catch (error) {
    const errors = handleAuthErrors(error)

    dispatch(authFailure(errors))
  }
}

export const isUserAuthenticated = () => async dispatch => {
  try {
    const token = await window.localStorage.getItem('jwt')
    if (!token) return dispatch(logout())

    await Axios.setToken(token)
    const res = await Axios.Auth.current()

    dispatch(authSuccess(res.data))
  } catch (error) {
    const errors = handleAuthErrors(error)

    dispatch(authFailure(errors))
  }
}

export default reducer
