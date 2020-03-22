import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import { isUserAuthenticated } from '../slices/auth'

import Navigation from '../components/Navigation/Navigation'

const Layout = ({ children }) => {
  const dispatch = useDispatch()

  useState(() => {
    dispatch(isUserAuthenticated())
  }, [])

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
