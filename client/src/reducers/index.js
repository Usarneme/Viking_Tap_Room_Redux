import { combineReducers } from 'redux'

import kegReducer from './kegs'
import renderStateReducer from './renderState'

const rootReducer = combineReducers({
  kegReducer: kegReducer,
  renderStateReducer: renderStateReducer
})

export default rootReducer
