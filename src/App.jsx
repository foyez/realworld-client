import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'

const App = () => {
  return (
    <>
      <Navigation />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </>
  )
}

export default App
