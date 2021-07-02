import React from 'react'
import PropTypes from 'prop-types'
import Header from './../components/Header'
import KegsList from './../components/KegsList'
import AddNewKeg from './../components/AddNewKeg'

function Kegs(props) {
  return (
    <div className='container tall'>
      <Header title='Kegs - Administration' />
      <KegsList kegs={props.kegs} page={'kegs'} />
      <AddNewKeg createNewKeg={(name, price, brand, alcoholContent) => props.createNewKeg(name, price, brand, alcoholContent)} />
    </div>
  )
}

Kegs.propTypes = {
  kegs: PropTypes.array.isRequired,
  createNewKeg: PropTypes.func
}

export default Kegs
