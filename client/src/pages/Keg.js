import React, { useParams } from 'react'
import PropTypes from 'prop-types'

function Keg(props) {
  const { id } = useParams()

  return (
    <div>
      <h1>Viewing Keg #{id}</h1>
    </div>
  )
}

Keg.propTypes = {
}

export default Keg
