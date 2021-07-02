import React from 'react'
import PropTypes from 'prop-types'
import SingleKeg from './SingleKeg'

function KegsList(props) {
  return (
    <div>
      {props.kegs.map(keg => <SingleKeg keg={keg} />)}
    </div>
  )
}

KegsList.propTypes = {
  kegs: PropTypes.array.isRequired
}

export default KegsList
