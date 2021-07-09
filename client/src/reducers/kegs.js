// Redux action constants
import { ADD, UPDATE, DELETE } from './../actions/kegs'
// Default state JSON - to emulate data pulled from back-end/DB
import { kegs } from './../defaultState.json'

const kegReducer = (state = kegs, action) => {
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
    case DELETE:
      return state.filter(k => k.id !== action.id)
    default:
      return state
  }
}

export default kegReducer
