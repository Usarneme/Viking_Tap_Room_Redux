import { kegs as defaultState } from './../../defaultKegs.json'
// Redux action constants
import { ADD, UPDATE, DELETE } from './../../actions/kegs'
// Reducer
import kegReducer from './../../reducers/kegs'

describe('🍻 KEGS REDUCERS TESTS 🍻', () => {
  let action
  const testKeg = {
    "id": "ace347c6-909e-4ebe-a61e-c51553ee479d",
    "brand": "Viking Brews",
    "name": "Test Beer",
    "price": 6,
    "pintsRemaining": 124,
    "alcoholContent": 8
  }

  test('sanity check', () => {
    expect(true).toEqual(true)
  })

  test('an empty state array with no action should return an empty array', () => {
    expect(kegReducer([],{ action: null })).toEqual([])
  })

  test('default state passed to the reducer with no action should return the same state', () => {
    expect(kegReducer(defaultState, { action: null })).toEqual(defaultState)
  })

  test('it adds a new keg successfully upon dispatch of ADD_KEG action', () => {
    action = {
      ADD, ...testKeg
    }
    const result = [...defaultState, testKeg]
    expect(kegReducer(defaultState, action)).toEqual(result)
  })
})


