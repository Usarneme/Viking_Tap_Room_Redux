import React from 'react'
import { v4 as uuid } from 'uuid'
import PropTypes from 'prop-types'
import SingleKeg from './SingleKeg'

function KegsList(props) {
  props.kegs.map(k => console.log(k))
  return (
    <div>
      {props.kegs.map(keg => <SingleKeg
        key={uuid()}
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
