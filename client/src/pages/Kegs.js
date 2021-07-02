import React from 'react'
import PropTypes from 'prop-types'
import Header from './../components/Header'
import KegsList from './../components/KegsList'

function Kegs(props) {
  return (
    <div className='container'>
      <Header title='Kegs' />
      <KegsList kegs={props.kegs} />
    </div>
  )
}

Kegs.propTypes = {
  kegs: PropTypes.array.isRequired
}

export default Kegs
