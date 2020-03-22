import Axios from '../axios'

const localStorageMiddleware = () => next => action => {
  if (action.type === 'auth/authSuccess') {
    const { token } = action.payload.user
    window.localStorage.setItem('jwt', token)
    Axios.setToken(token)
  } else if (action.type === 'auth/logout') {
    window.localStorage.removeItem('jwt')
    Axios.setToken(null)
  }

  next(action)
}

export { localStorageMiddleware }
