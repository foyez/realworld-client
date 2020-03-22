import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { selectAuth, logout } from '../../slices/auth'

const Navigation = () => {
  const dispatch = useDispatch()
  const { currentUser } = useSelector(selectAuth)

  const guestLinks = (
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

  const authLinks = (
    <ul className="nav navbar-nav pull-xs-right">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <span onClick={() => dispatch(logout())} className="nav-link" style={{ cursor: 'pointer' }}>
          Logout
        </span>
      </li>
    </ul>
  )

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {process.env.REACT_APP_NAME}
        </Link>

        {currentUser ? authLinks : guestLinks}
      </div>
    </nav>
  )
}

export default Navigation
