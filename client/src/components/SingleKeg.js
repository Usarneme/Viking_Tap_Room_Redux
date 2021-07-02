import React from 'react'
import PropTypes from 'prop-types'

function SingleKey(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <div>${props.price}</div>
      <div>Pints Remaining: {props.pintsRemaining}</div>
      <div>Alcohol Content: {props.alcoholContent}</div>
    </div>
  )
}

SingleKey.propTypes = {
  alcoholContent: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  pintsRemaining: PropTypes.number.isRequired
}

export default SingleKey
