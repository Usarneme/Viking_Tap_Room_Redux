import React from 'react'
import PropTypes from 'prop-types'
import { GiVikingShield } from 'react-icons/gi'

function Header(props) {
  return (
    <div>
      <h1><GiVikingShield /> Viking Tap Room <GiVikingShield /></h1>
      <h2>{props.title}</h2>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
