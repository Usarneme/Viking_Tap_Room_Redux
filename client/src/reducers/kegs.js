const defaultState = require('./../defaultKegs.json')
// Redux action constants
import { ADD, UPDATE, DELETE } from './../actions/kegs'

const kegReducer = (state = defaultState, action) => {
  const { id, brand, name, price, pintsRemaining = 124, alcoholContent } = action
  switch (action.type) {
    case ADD:
      return [...state, { id, brand, name, price, pintsRemaining, alcoholContent }]
    default:
      return state
  }
}

export default kegReducer
