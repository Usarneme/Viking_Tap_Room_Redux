import React, { useState } from 'react'
import PropTypes from 'prop-types'

function EditKeg(props) {
  const [name, changeName] = useState(props.name)
  const [price, changePrice] = useState(props.price)
  const [brand, changeBrand] = useState(props.brand)
  const [alcoholContent, changeAlcoholContent] = useState(props.alcoholContent)
  const [pintsRemaining, changePintsRemaining] = useState(props.pintsRemaining)

  const handleSubmit = event => {
    event.preventDefault()
    console.log('submit')
    props.editKeg(props.id, name, price, brand, alcoholContent, pintsRemaining)
  }

  const formStyles = {
    display: 'grid'
  }

  const divStyles = {
    display: 'grid',
    gridTemplateColumns: '20% 80%'
  }

  return (
    <div className="container">
      <h3 style={{ margin: '22px' }}>Editing Keg - {props.name}</h3>
      <form style={formStyles} onSubmit={e => handleSubmit(e)} >
        <div style={divStyles}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            onChange={e => changeName(e.target.value)}
            placeholder='Name'
            value={name}
            required></input>
        </div>
        <div style={divStyles}>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            min='1'
            name='price'
            onChange={e => changePrice(e.target.value)}
            placeholder='Price'
            value={price}
            required></input>
        </div>
        <div style={divStyles}>
          <label htmlFor='brand'>Brand</label>
          <input
            type='text'
            name='brand'
            onChange={e => changeBrand(e.target.value)}
            placeholder='Brand'
            value={brand}
            required></input>
        </div>
        <div style={divStyles}>
          <label htmlFor='alcoholContent'>Alcohol Content</label>
          <input
            type='number'
            min='1'
            name='alcoholContent'
            onChange={e => changeAlcoholContent(e.target.value)}
            placeholder='Alcohol Content'
            value={alcoholContent}
            required></input>
        </div>
        <div style={divStyles}>
          <label htmlFor='pintsRemaining'>Pints Remaining</label>
          <input
            type='number'
            min='1'
            name='pintsRemaining'
            onChange={e => changePintsRemaining(e.target.value)}
            placeholder='pintsRemaining'
            value={pintsRemaining}
            required></input>
        </div>
        <button type='submit'>Submit Changes</button>
      </form>
    </div>
  )
}

EditKeg.propTypes = {
  id: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  pintsRemaining: PropTypes.string.isRequired,
  editKeg: PropTypes.func.isRequired
}

export default EditKeg
