// Redux action constants
import { TOGGLE_EDIT, HIDE_EDITOR } from './../actions/renderState'
import { renderState } from './../defaultState.json'

const renderStateReducer = (state = renderState, action) => {
  switch (action.type) {
    case TOGGLE_EDIT:
      return { editFormShowing: !state.editFormShowing }
    case HIDE_EDITOR:
      return { editFormShowing: false }
    default:
      return state
  }
}

export default renderStateReducer
