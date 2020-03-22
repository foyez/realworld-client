import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { useDispatch, useSelector } from 'react-redux'
import { signInAsync, selectAuth } from '../../slices/auth'

import ListErrors from '../../components/ListErrors/ListErrors'

const LoginPage = ({ location }) => {
  const dispatch = useDispatch()
  const { errors } = useSelector(selectAuth)

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  const { email, password } = credentials
  const isEnabled = email.length > 0 && password.length > 0

  const handleChange = e => {
    const { name, value } = e.target

    setCredentials({ ...credentials, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(signInAsync(credentials))
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
              <Link
                to={{
                  pathname: '/register',
                  state: location.state,
                }}
              >
                Need an account?
              </Link>
            </p>

            <ListErrors errors={errors} />

            <form onSubmit={handleSubmit} noValidate>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={!isEnabled}
                >
                  Sign in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

LoginPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default LoginPage
