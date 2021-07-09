import React from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'

function SingleKeg(props) {
  const kegStyles = {
    padding: '2px 4px'
  }
  const { id } = useParams()

  return (
    <div id={props.id} style={kegStyles}>
      <div style={kegStyles} className='flexed row'>
        ${props.price}
        <h3>{props.brand} - {props.name}</h3>
      </div>
      <div style={kegStyles}>Pints Remaining: {props.pintsRemaining}</div>
      <div style={kegStyles}>Alcohol Content: {props.alcoholContent}</div>
        { props.sellPint !== null ?
          <div style={kegStyles}>
            <button
              onClick={() => props.sellPint(props.id)}
              disabled={props.pintsRemaining < 1}
            >Sell A Pint</button>
          </div>
          : null
        }

        { id ? null :
          <div style={kegStyles}>
            <Link to={{
              pathname: `/kegs/${props.id}`,
              props: {props}
            }}><button>View Details</button></Link>
          </div>
        }

        { id ?
          <div style={kegStyles}>
            <button
              onClick={() => props.removeKeg(props.id)}
            >Remove This Keg</button>
          </div>
          : null
        }

        { id ?
          props.kegEditShowing ?
            <div style={kegStyles}>
              <button onClick={props.toggleEditKeg}>Cancel Edits</button>
              form here
            </div>
            :
            <div style={kegStyles}>
              <button onClick={props.toggleEditKeg}>Edit This Keg</button>
            </div>
          : null
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
  removeKeg: PropTypes.func,
  toggleEditKeg: PropTypes.func,
  kegEditShowing: PropTypes.bool
}

export default SingleKeg
