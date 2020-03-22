import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { PrivateRoute, RestrictedRoute } from './components/CustomRoutes'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import Layout from './layout/Layout'

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <RestrictedRoute path="/login" component={LoginPage} />
      <RestrictedRoute path="/register" component={RegisterPage} />
    </Switch>
  </Layout>
)

export default App
