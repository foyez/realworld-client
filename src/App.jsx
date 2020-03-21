import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { PrivateRoute, RestrictedRoute } from './components/CustomRoutes'
import Navigation from './components/Navigation/Navigation'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'

const App = () => {
  return (
    <>
      <Navigation />

      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <RestrictedRoute path="/login" component={LoginPage} />
        <RestrictedRoute path="/register" component={RegisterPage} />
      </Switch>
    </>
  )
}

export default App
