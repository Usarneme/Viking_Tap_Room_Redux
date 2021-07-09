import { createStore } from 'redux'

import defaultState, { kegs, renderState } from './../../defaultKegs.json'
import rootReducer from './../../reducers'
import renderStateReducer from './../../reducers/renderState'
import kegReducer from '../../reducers/kegs'

let store = createStore(rootReducer)

describe('√ ROOT REDUCER TESTS √', () => {
  test('sanity check', () => {
    expect(true).toEqual(true)
  })

  test('verify initial state of root reducer is same as renderState reducer', () => {
    expect(store.getState().kegReducer).toEqual(kegReducer(defaultState, { type: null }))
  })
})