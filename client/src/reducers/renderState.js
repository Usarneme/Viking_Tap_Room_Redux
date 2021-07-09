// Redux action constants
import { TOGGLE_EDIT } from './../actions/renderState'
import { renderState } from './../defaultState.json'

const renderStateReducer = (state = renderState, action) => {
  switch (action.type) {
    case TOGGLE_EDIT:
      return { renderEditForm: !state.renderEditForm }
    default:
      return state
  }
}

export default renderStateReducer
