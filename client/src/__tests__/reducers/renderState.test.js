// Redux action constants
import { TOGGLE_EDIT } from './../../actions/renderState'
import renderStateReducer from './../../reducers/renderState'

describe('🎛  REACT RENDER STATE TESTS 🎛', () => {
  let action
  const defaultRenderState = { renderEditForm: false }

  test('sanity check', () => {
    expect(true).toEqual(true)
  })

  test('show edit form should default to false', () => {
    expect(renderStateReducer(defaultRenderState, { type: null })).toEqual(defaultRenderState)
  })

  test('show edit form action should toggle state from false to true', () => {
    action = {
      type: TOGGLE_EDIT
    }
    const resultRenderState = {
      renderEditForm: true
    }
    expect(renderStateReducer(defaultRenderState, action)).toEqual(resultRenderState)
  })

  test('show edit form action should toggle state from false to true and back to false', () => {
    action = {
      type: TOGGLE_EDIT
    }
    const trueRenderState = {
      renderEditForm: true
    }
    expect(renderStateReducer(trueRenderState, action)).toEqual(defaultRenderState)
  })
})
