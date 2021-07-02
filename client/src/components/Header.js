import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
  return (
    <div>
      <h1>Viking Tap Room</h1>
      <h2>{props.title}</h2>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
