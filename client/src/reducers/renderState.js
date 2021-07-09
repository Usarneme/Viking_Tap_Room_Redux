// Redux action constants
import { TOGGLE_EDIT } from './../actions/renderState'
import defaultState from './../defaultKegs.json'

const renderStateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_EDIT:
      return { renderEditForm: !state.renderEditForm }
    default:
      return state
  }
}

export default renderStateReducer
