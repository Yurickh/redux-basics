import { createStore } from 'redux'

// a reducer is a pure function of the type
// (state, action) => (newState)
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// the store that holds the state
// the state _must_ be a plain js object
let store = createStore(counter)

// action dispatchers
// the object { type: 'INCREMENT' } is the action, here
store.dispatch({ type: 'INCREMENT' })
console.log(store.getState())

store.dispatch({ type: 'INCREMENT' })
console.log(store.getState())

store.dispatch({ type: 'DECREMENT' })
console.log(store.getState())

// you can also use action-creators
// that is, functions that return the action you want

function increment() {
  return { type: 'INCREMENT' }
}
