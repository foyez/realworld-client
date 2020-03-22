import Axios from 'axios'

const API_ROOT = process.env.REACT_APP_API_ROOT

const axios = Axios.create({
  baseURL: API_ROOT,
})

let token = null
const authHeader = () => {
  if (token) {
    console.log(token)
    return (axios.defaults.headers.common['Authorization'] = `Bearer ${token}`)
  }

  return null
}

const Auth = {
  current: () => axios.get('/user', authHeader()),
  login: (email, password) => axios.post('/users/login', { user: { email, password } }),
  register: (username, email, password) =>
    axios.post('/users', { user: { username, email, password } }),
}

export default {
  Auth,
  setToken: _token => {
    token = _token
  },
}
