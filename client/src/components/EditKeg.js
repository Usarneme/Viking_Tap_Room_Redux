import React from 'react'
import PropTypes from 'prop-types'

function EditKeg(props) {
  return (
    <form>
      edit keg form
    </form>
  )
}

EditKeg.propTypes = {
  id: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  pintsRemaining: PropTypes.string.isRequired
}

export default EditKeg
