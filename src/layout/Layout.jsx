import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import { isUserAuthenticated } from '../slices/auth'

import Navigation from '../components/Navigation/Navigation'

const Layout = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(isUserAuthenticated())
  }, [dispatch])

  return (
    <>
      <Navigation />

      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
