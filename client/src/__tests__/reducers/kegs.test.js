import defaultState from '../../defaultKegs.json'
// Redux action constants
import { ADD, UPDATE, DELETE } from '../../actions/kegs'
// Reducer
import kegReducer from '../../reducers/kegs'

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

  const existingKeg = {
    "id": "ace347c6-909e-4ebe-a61e-c51553fa479f",
    "brand": "Viking Brews",
    "name": "Hela Pils",
    "price": 3,
    "pintsRemaining": 124,
    "alcoholContent": 5
  }

  test('sanity check', () => {
    expect(true).toEqual(true)
  })

  test('an empty state array with no action should return an empty array', () => {
    expect(kegReducer({}, { action: null })).toEqual({})
  })

  test('default state passed to the reducer with no action should return the same state', () => {
    expect(kegReducer(defaultState, { action: null })).toEqual(defaultState)
  })

  test('it adds a new keg successfully upon dispatch of ADD_KEG action', () => {
    action = {
      type: ADD, ...testKeg
    }
    const result = { kegs: [...defaultState.kegs, testKeg] }
    expect(kegReducer(defaultState, action)).toEqual(result)
  })

  test('it successfully updates state when UPDATE_KEG action is invoked', () => {
    const stateWithoutCurrentKeg = defaultState.kegs.filter(k => k.id !== existingKeg.id)
    const existingKegCopy = {...existingKeg}
    existingKegCopy.alcoholContent = 22

    action = {
      type: UPDATE, ...existingKegCopy
    }

    const result = { kegs: [...stateWithoutCurrentKeg, existingKegCopy] }
    expect(kegReducer(defaultState, action)).toEqual(result)
  })

  test('it removes a keg from state when DELETE_KEG action is invoked', () => {
    const kegsWithoutDeleted = defaultState.kegs.filter(k => k.id !== existingKeg.id)
    action = {
      type: DELETE, id: existingKeg.id
    }
    expect(kegReducer(defaultState, action)).toEqual({ kegs: kegsWithoutDeleted })
  })
})
