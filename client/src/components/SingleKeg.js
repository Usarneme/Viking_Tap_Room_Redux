import React from 'react'
import PropTypes from 'prop-types'

function SingleKeg(props) {
  return (
    <div id={props.id}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        ${props.price}
        <h3>{props.brand} - {props.name}</h3>
      </div>
      <div>Pints Remaining: {props.pintsRemaining}</div>
      <div>Alcohol Content: {props.alcoholContent}</div>
      <a href={`/kegs/${props.id}`} >View Details</a>
    </div>
  )
}

SingleKeg.propTypes = {
  id: PropTypes.string.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  pintsRemaining: PropTypes.number.isRequired
}

export default SingleKeg
