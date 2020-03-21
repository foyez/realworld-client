import Axios from 'axios'

const API_ROOT = 'https://foyez-realworld-api.herokuapp.com/api'

const axios = Axios.create({ baseURL: API_ROOT })

const Auth = {
  login: (email, password) => axios.post('/users/login', { user: { email, password } }),
  register: (username, email, password) =>
    axios.post('/users', { user: { username, email, password } }),
}

export default { Auth }
