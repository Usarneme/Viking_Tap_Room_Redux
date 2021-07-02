import React, { useParams } from 'react'
import PropTypes from 'prop-types'
import Header from './../components/Header'
import SingleKeg from './../components/SingleKeg'

function Keg(props) {
  const { id } = useParams()

  return (
    <div>
      <Header title={`Keg #${id}`} />
      <SingleKeg keg={props.keg} />
    </div>
  )
}

Keg.propTypes = {
  kegs: PropTypes.array.isRequired
}

export default Keg
