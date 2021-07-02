import React from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from './../components/Header'
import SingleKeg from './../components/SingleKeg'

function KegPage(props) {
  const { id } = useParams()
  let thisKeg
  props.kegs.forEach(k => { if (k.id === id) thisKeg = k })
  const { name, price, alcoholContent, pintsRemaining } = thisKeg

  return (
    <div className='container'>
      <Header title={`Keg #${id}`} />
      <SingleKeg
        name={name}
        price={price}
        alcoholContent={alcoholContent}
        pintsRemaining={pintsRemaining}
        id={id} />
    </div>
  )
}

KegPage.propTypes = {
  kegs: PropTypes.array.isRequired
}

export default KegPage
