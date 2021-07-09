import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from './../components/Header'
import KegsList from '../components/KegsList'

function Home(props) {
  useEffect(() => {
    props.hideEditor()
  }, [])

  return(
    <div className='container tall'>
      <Header title='Home' />
      <KegsList kegs={props.kegs} page={'home'} />
    </div>
  )
}

Home.propTypes = {
  kegs: PropTypes.array.isRequired,
  hideEditor: PropTypes.func.isRequired
}

export default Home
