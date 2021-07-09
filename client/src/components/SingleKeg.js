import React from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'

function SingleKeg(props) {
  const kegStyles = {
    padding: '2px 4px'
  }

  const { id } = useParams()
  console.log('SINGLE KEG ROUTE: ', id)

  return (
    <div id={props.id} style={kegStyles}>
      <div style={kegStyles} className='flexed row'>
        ${props.price}
        <h3>{props.brand} - {props.name}</h3>
      </div>
      <div style={kegStyles}>Pints Remaining: {props.pintsRemaining}</div>
      <div style={kegStyles}>Alcohol Content: {props.alcoholContent}</div>
      <div style={kegStyles}>
        {props.sellPint !== null
          ?
            <button
              onClick={() => props.sellPint(props.id)}
              disabled={props.pintsRemaining < 1}
            >Sell A Pint</button>
          :
            null}
      </div>
      <div style={kegStyles}>
        {props.removeKeg !== null
          ?
            <button
              onClick={() => props.removeKeg(props.id)}
            >Remove This Keg</button>
          :
            null}
      </div>
      { id ?
        null :
        <div style={kegStyles}>
          <Link to={{
            pathname: `/kegs/${props.id}`,
            props: {props}
          }}>View Details</Link>
        </div>
      }
    </div>
  )
}

SingleKeg.propTypes = {
  id: PropTypes.string.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  pintsRemaining: PropTypes.number.isRequired,
  sellPint: PropTypes.func,
  removeKeg: PropTypes.func
}

export default SingleKeg
