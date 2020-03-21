import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectAuth } from '../slices/auth'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useSelector(selectAuth)

  return (
    <Route
      {...rest}
      render={props =>
        currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

export const RestrictedRoute = ({ component: Component, location, ...rest }) => {
  const { currentUser } = useSelector(selectAuth)
  const { from } = location.state || { from: { pathname: '/' } }

  return (
    <Route
      {...rest}
      render={props => (currentUser ? <Redirect to={from} /> : <Component {...props} />)}
    />
  )
}
