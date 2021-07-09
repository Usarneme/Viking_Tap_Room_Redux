import React from 'react'
import PropTypes from 'prop-types'
import Header from './../components/Header'
import KegsList from './../components/KegsList'
import AddNewKeg from './../components/AddNewKeg'

function Kegs(props) {
  return (
    <div className='container tall'>
      <Header title='Administration' />
      <KegsList
        kegs={props.kegs}
        page={'kegs'}
        sellPint={props.sellPint}
        removeKeg={props.removeKeg}
        renderEditForm={props.renderEditForm} />
      <AddNewKeg
        createNewKeg={(name, price, brand, alcoholContent) => props.createNewKeg(name, price, brand, alcoholContent)}
      />
    </div>
  )
}

Kegs.propTypes = {
  createNewKeg: PropTypes.func,
  kegs: PropTypes.array.isRequired,
  sellPint: PropTypes.func.isRequired,
  removeKeg: PropTypes.func.isRequired,
  renderEditForm: PropTypes.bool
}

export default Kegs
