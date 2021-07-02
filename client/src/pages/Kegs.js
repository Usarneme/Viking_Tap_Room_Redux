import React from 'react'
import Header from './../components/Header'
import KegsList from '../components/KegsList'

function Kegs() {
  return (
    <div className='container'>
    <Header title='Kegs' />
      <KegsList />
    </div>
  )
}

export default Kegs
