// Redux action constants
import { TOGGLE_EDIT } from './../actions/renderState'

const renderStateReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_EDIT:
      return { renderEditForm: !state.renderEditForm }
    default:
      return state
  }
}

export default renderStateReducer
