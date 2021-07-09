import { combineReducers } from 'redux'

import kegReducer from './kegs'
import renderStateReducer from './renderState'

const rootReducer = combineReducers({
  kegReducer,
  renderStateReducer
})

export default rootReducer
