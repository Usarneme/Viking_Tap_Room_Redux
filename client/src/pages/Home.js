import React from 'react'
import PropTypes from 'prop-types'
import Header from './../components/Header'
import KegsList from '../components/KegsList'

function Home(props) {
  return(
    <div className='container'>
      <Header title='Home' />
      <KegsList kegs={props.kegs} />
    </div>
  )
}

Home.propTypes = {
  kegs: PropTypes.array.isRequired
}

export default Home
