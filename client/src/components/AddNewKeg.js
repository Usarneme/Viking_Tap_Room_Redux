import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddNewKeg(props) {
  const [name, changeName] = useState("")
  const [price, changePrice] = useState("")
  const [brand, changeBrand] = useState("")
  const [alcoholContent, changeAlcoholContent] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    props.createNewKeg(name, price, brand, alcoholContent)
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
      <h3 style={{ margin: '22px' }}>Add a new keg to the rotation</h3>
      <form style={formStyles} onSubmit={event => handleSubmit(event)} >
        <div style={divStyles}>
          <label htmlFor='name'>Name</label>
          <input name='name' onChange={() => changeName()} placeholder='Name' ></input>
        </div>
        <div style={divStyles}>
          <label htmlFor='price'>Price</label>
          <input name='price' onChange={() => changePrice()} placeholder='Price' ></input>
        </div>
        <div style={divStyles}>
          <label htmlFor='brand'>Brand</label>
          <input name='brand' onChange={() => changeBrand()} placeholder='Brand' ></input>
        </div>
        <div style={divStyles}>
          <label htmlFor='alcoholContent'>Alcohol Content</label>
          <input name='alcoholContent' onChange={() => changeAlcoholContent()} placeholder='Alcohol Content' ></input>
        </div>
        <button type='submit'>Add Keg</button>
      </form>
    </div>
  )
}

AddNewKeg.propTypes = {
  createNewKeg: PropTypes.func.isRequired
}

export default AddNewKeg