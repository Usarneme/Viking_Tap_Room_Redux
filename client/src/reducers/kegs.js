// Redux action constants
import { ADD, UPDATE, DELETE } from './../actions/kegs'
// Default state JSON - to emulate data pulled from back-end/DB
import defaultState from './../defaultKegs.json'

const kegReducer = (state = defaultState, action) => {
  const { id, brand, name, price, pintsRemaining = 124, alcoholContent } = action
  switch (action.type) {
    case ADD:
      return { kegs: [...state.kegs, { id, brand, name, price, pintsRemaining, alcoholContent }] }
    case UPDATE:
      const kegsWithoutUpdated = state.kegs.filter(k => k.id !== action.id)
      const updatedKeg = {
        id: action.id,
        brand: action.brand,
        name: action.name,
        price: action.price,
        pintsRemaining: action.pintsRemaining,
        alcoholContent: action.alcoholContent
      }
      return { kegs: [...kegsWithoutUpdated, updatedKeg] }
    case DELETE:
      return { kegs: state.kegs.filter(k => k.id !== action.id) }
    default:
      return state
  }
}

export default kegReducer
