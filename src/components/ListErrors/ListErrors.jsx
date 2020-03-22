import React from 'react'
import PropTypes from 'prop-types'

const ListErrors = ({ errors }) => {
  return errors ? (
    <ul className="error-messages">
      {Object.keys(errors).map(key => {
        return (
          <li key={key}>
            {key} {errors[key]}
          </li>
        )
      })}
    </ul>
  ) : null
}

ListErrors.propTypes = {
  errors: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object]),
}

export default ListErrors
