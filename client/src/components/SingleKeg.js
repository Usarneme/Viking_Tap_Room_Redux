import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function SingleKeg(props) {
  return (
    <div id={props.id}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        ${props.price}
        <h3>{props.brand} - {props.name}</h3>
      </div>
      <div>Pints Remaining: {props.pintsRemaining}</div>
      <div>Alcohol Content: {props.alcoholContent}</div>
      {props.sellPint !== null
        ?
          <button
            onClick={() => props.sellPint(props.id)}
            disabled={props.pintsRemaining < 1}
          >Sell A Pint</button>
        :
          null}
      <Link to={{
        pathname: `/kegs/${props.id}`,
        props: {props}
      }}>View Details</Link>
    </div>
  )
}

SingleKeg.propTypes = {
  id: PropTypes.string.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  pintsRemaining: PropTypes.number.isRequired,
  sellPint: PropTypes.func
}

export default SingleKeg
