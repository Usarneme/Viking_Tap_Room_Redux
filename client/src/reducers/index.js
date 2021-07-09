import { combineReducers } from 'redux'

import kegReducer from './kegs'
import renderStateReducer from './renderState'

const rootReducer = combineReducers({
  kegs: kegReducer,
  renderState: renderStateReducer
})

export default rootReducer
