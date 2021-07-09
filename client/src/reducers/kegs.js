const defaultState = require('./../defaultKegs.json')
// Redux action constants
import { ADD, UPDATE, DELETE } from './../actions/kegs'

const kegReducer = (state = defaultState, action) => {
  const { id, brand, name, price, pintsRemaining = 124, alcoholContent } = action
  switch (action.type) {
    case ADD:
      return [...state, { id, brand, name, price, pintsRemaining, alcoholContent }]
    case UPDATE:
      const kegsWithoutUpdated = state.filter(k => k.id !== action.id)
      const updatedKeg = {
        id: action.id,
        brand: action.brand,
        name: action.name,
        price: action.price,
        pintsRemaining: action.pintsRemaining,
        alcoholContent: action.alcoholContent
      }
      return [...kegsWithoutUpdated, updatedKeg]
    default:
      return state
  }
}

export default kegReducer
