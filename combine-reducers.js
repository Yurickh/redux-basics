/**
  state = todos: {
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

// todos/byId.js
function byId(state = {}, action) {
  switch(action.type) {
    case 'ADD_TODO':
    case 'EDIT_TODO':
      return {
        ...state,
        [action.todo.id]: action.todo,
      }

    case 'REMOVE_TODO':
      // return {
      //   ...state,
      //   [action.id]: undefined,
      // }
      // Or maybe
      //
      return Object.keys(state)
        .filter(key => key !== action.id)
        .reduce((acc, key) => ({
          ...acc,
          [key]: state[key],
        }), {})

    default:
      return state
  }
}

// todos/allIds.js
function allIds(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, action.todo.id]

    case 'REMOVE_TODO':
      return state.filter(todo => todo !== action.id)

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
console.log(todos, allIds, byId)

// usage

const firstTodo = {
  type: 'ADD_TODO',
  todo: {
    id: '0',
    name: 'first',
    value: 'Make my presentation'
  }
}

let state = todos(undefined, firstTodo)

console.log(state.byId)
console.log(state.allIds)

function addTodo(todo) {
  return {
    type: 'ADD_TODO',
    todo,
  }
}

// this is the base on how redux works
state = todos(state, addTodo({
  id: '1',
  name: 'second',
  value: 'Blow their minds',
}))

console.log(state.byId)
console.log(state.allIds)

state = todos(state, { type: 'REMOVE_TODO', id: '0' })

console.log(state.byId)
console.log(state.allIds)

console.log('0' in state.byId)
