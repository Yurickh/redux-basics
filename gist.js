import { createStore } from 'redux'

// a reducer
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
let store = createStore(counter)

// action dispatchers
store.dispatch({ type: 'INCREMENT' })
console.log(store.getState())

store.dispatch({ type: 'INCREMENT' })
console.log(store.getState())

store.dispatch({ type: 'DECREMENT' })
console.log(store.getState())
