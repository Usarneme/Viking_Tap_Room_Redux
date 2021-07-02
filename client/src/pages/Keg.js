import React from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from './../components/Header'
import SingleKeg from './../components/SingleKeg'

function KegPage(props) {
  const { id } = useParams()
  const thisKeg = props.kegs.filter(k => k.id === id)[0]
  console.log("keg page found keg", thisKeg)
  const { name, brand, price, alcoholContent, pintsRemaining } = thisKeg

  return (
    <div className='container tall'>
      <Header title={`Viewing Keg: ${name}`} />
      <SingleKeg
        alcoholContent={alcoholContent}
        brand={brand}
        id={id}
        name={name}
        pintsRemaining={pintsRemaining}
        price={price}
        sellPint={props.sellPint}
      />
    </div>
  )
}

KegPage.propTypes = {
  kegs: PropTypes.array.isRequired,
  sellPint: PropTypes.func.isRequired
}

export default KegPage
