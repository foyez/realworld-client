import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { registerAsync, selectAuth } from '../../slices/auth'

import ListErrors from '../../components/ListErrors/ListErrors'

const RegisterPage = () => {
  const dispatch = useDispatch()
  const { errorMessage } = useSelector(selectAuth)

  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
  })
  const { username, email, password } = credentials
  const isEnabled = email.length > 0 && password.length > 0 && username.length > 0

  const handleChange = e => {
    const { name, value } = e.target

    setCredentials({ ...credentials, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(registerAsync(credentials))
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
              <Link to="/login">Have an account?</Link>
            </p>

            <ListErrors errors={errorMessage} />

            <form onSubmit={handleSubmit} noValidate>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={handleChange}
                  />
                </fieldset>

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
                  disabled={!isEnabled}
                  type="submit"
                >
                  Sign Up
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
