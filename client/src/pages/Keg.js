import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from './../components/Header'
import SingleKeg from './../components/SingleKeg'

function KegPage(props) {
  const { id } = useParams()
  let history = useHistory()

  const removeKeg = () => {
    props.removeKeg(id)
    return history.push('/kegs')
  }

  const thisKeg = props.kegs.filter(k => k.id === id)[0]
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
        removeKeg={removeKeg}
        toggleEditKeg={props.toggleEditKeg}
        editFormShowing={props.editFormShowing}
        editKeg={props.editKeg}
      />
    </div>
  )
}

KegPage.propTypes = {
  kegs: PropTypes.array.isRequired,
  sellPint: PropTypes.func.isRequired,
  removeKeg: PropTypes.func.isRequired,
  toggleEditKeg: PropTypes.func.isRequired,
  editFormShowing: PropTypes.bool.isRequired,
  editKeg: PropTypes.func.isRequired
}

export default KegPage
