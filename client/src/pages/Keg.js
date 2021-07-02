import React, { useParams } from 'react'
import PropTypes from 'prop-types'
import SingleKeg from './../components/SingleKeg'

function Keg(props) {
  const { id } = useParams()

  return (
    <div>
      <h1>Viewing Keg #{id}</h1>
      <SingleKeg keg={props.keg} />
    </div>
  )
}

Keg.propTypes = {
  kegs: PropTypes.array.isRequired
}

export default Keg
