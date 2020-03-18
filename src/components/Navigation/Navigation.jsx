import React from 'react'
import { Link } from 'react-router-dom'

const LoggedOutView = () => {
  return (
    <ul className="nav navbar-nav pull-xs-right">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Sign in
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Sign up
        </Link>
      </li>
    </ul>
  )
}

const Navigation = () => (
  <nav className="navbar navbar-light">
    <div className="container">
      <Link to="/" className="navbar-brand">
        App Name
      </Link>

      <LoggedOutView />
    </div>
  </nav>
)

export default Navigation
