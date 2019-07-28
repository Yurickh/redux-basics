/**
  Here, we're using the following state structure
  state = {
    byId: {
      '0': {
        id: 0,
        name: 'first',
        value: 'Make my presentation',
      },
      1: {
        id: 1,
        name: 'rest',
        value: 'Blow their minds',
      }
    },
    allIds: ['0', '1'],
  }
*/

// todos/allIds.js
// Note that, for allIds, the `state` is only what's inside the `allIds` key in the state
// It also returns what's relevant for the allIds key, which means it is oblivious to
// what happens inside `byId`
function allIds(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.todo.id]

    case 'REMOVE_TODO':
      return state.filter(todo => todo !== action.id)

    default:
      return state
  }
}

// todos/byId.js
// The same thing applies to byId, it only cares about what is under the `byId` of our state
function byId(state = {}, action) {
  switch (action.type) {
    case 'ADD_TODO':
    case 'EDIT_TODO':
      return {
        ...state,
        [action.todo.id]: action.todo,
      }

    case 'REMOVE_TODO': {
      const { [action.id]: blackHole, ...everythingElse } = state
      return everythingElse
    }

    default:
      return state
  }
}

// todos/index.js
import { combineReducers } from 'redux'

const todos = combineReducers({
  byId,
  allIds,
})
// todos is just as much a pure function as allIds and byId are
// it also shares the same (state, action) => (newstate) signature

console.log(todos, allIds, byId)

// usage

// Remember that this function is an action creator, not the action itself
//  it returns the action, that is a simple, plain, js object
function addTodo(todo) {
  return {
    type: 'ADD_TODO',
    todo,
  }
}

const addFirstTodo = addTodo({
  id: '0',
  name: 'first',
  value: 'Make my presentation',
})

// running the reducer with an empty state should never break
let state = todos(undefined, addFirstTodo)

// note how todos returns the object we would expect
console.log(state.byId)
console.log(state.allIds)

// this is the base on how redux works
// it feeds the state into the reducer, generating the new version of the state
state = todos(
  state,
  addTodo({
    id: '1',
    name: 'second',
    value: 'Blow their minds',
  }),
)

console.log(state.byId)
console.log(state.allIds)

// Note that you don't _need_ an action creator.
// Actions are just js objects after all
state = todos(state, { type: 'REMOVE_TODO', id: '0' })

console.log(state.byId)
console.log(state.allIds)
