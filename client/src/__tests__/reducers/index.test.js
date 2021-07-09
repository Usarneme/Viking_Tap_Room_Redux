import { createStore } from 'redux'

import { kegs, renderState } from './../../defaultState.json'
import rootReducer from './../../reducers'
import renderStateReducer from './../../reducers/renderState'
import kegReducer from '../../reducers/kegs'

let store = createStore(rootReducer)

describe('√ ROOT REDUCER TESTS √', () => {
  test('sanity check', () => {
    expect(true).toEqual(true)
  })

  test('verify initial state of root reducer is same as kegReducer reducer', () => {
    expect(store.getState().kegReducer).toEqual(kegReducer(kegs, { type: null }))
  })

  test('verify initial state of root reducer is same as renderState reducer', () => {
    expect(store.getState().renderStateReducer).toEqual(renderStateReducer(renderState, { type: null }))
  })
})
