import React from 'react'

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">{process.env.REACT_APP_NAME}</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  )
}

export default Banner
