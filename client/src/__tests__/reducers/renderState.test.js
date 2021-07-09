// Redux action constants
import { TOGGLE_EDIT } from './../../actions/renderState'
import renderStateReducer from './../../reducers/renderState'

describe('🎛  REACT RENDER STATE TESTS 🎛', () => {
  test('sanity check', () => {
    expect(true).toEqual(true)
  })

  const defaultRenderState = { renderEditForm: false }

  test('show edit form should default to false', () => {
    expect(renderStateReducer(defaultRenderState, { type: null })).toBe(defaultRenderState)
  })
})
