import React from 'react'
import { v4 as uuid } from 'uuid'
import PropTypes from 'prop-types'
import SingleKeg from './SingleKeg'

function KegsList(props) {
  const containerStyles = {
    display: 'grid',
    gridGap: '11px',
    gridTemplateColumns: 'repeat(3, 1fr)'
  }

  return (
    <div style={containerStyles}>
      {props.kegs.map(keg => <SingleKeg
        key={keg.id}
        id={keg.id}
        alcoholContent={keg.alcoholContent}
        name={keg.name}
        price={keg.price}
        pintsRemaining={keg.pintsRemaining} />)}
    </div>
  )
}

KegsList.propTypes = {
  kegs: PropTypes.array.isRequired
}

export default KegsList
