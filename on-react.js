// I didn't really run this code, so consider it a kinda pseudo-js
//  in the sense that I've run no tests here whatsoever

import React from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// MyRootComponent.js
// The second parameter of the `createStore` is the default value for the store
const store = createStore(name, 'Yurick')

// The Provider uses React's Context API to
//  give access to all children components to the store
const MyRootComponent = () => (
  <Provider store={store}>
    <main className="root">
      <MyChildComponent />
      <MyChildComponent />
      <MyChildComponent />
    </main>
  </Provider>
)

// MyChildComponent.js
// Note how this component is oblivious to redux
const MyChildComponent = () => (
  <article>
    <h1>Child title</h1>
    <MyGrandsonComponent />
  </article>
)

// MyGrandsonComponent.js

// mapStateToProps is the usual name of the function that receives the state and returns
//  an object that will be merged with the child component's props
function mapStateToProps(state) {
  return {
    name: getName(state),
  }
}

// connect is a HOC (higher-order-component), which means it is a function of the type
// (config) => (component) => (component)
// the 'connected' component will receive props from `mapStateToProps` as well as the `dispatch`
//  method, which can me used to emit actions
const MyGrandsonComponent = connect(mapStateToProps)(({ name, dispatch }) => (
  <p>
    Hello, my name is {name}
    <button onClick={dispatch({ type: 'EDIT_NAME', name: 'Roberto' })}>
      Change my name to Roberto
    </button>
  </p>
))

// name.js (reducer)
function name(state = '', action) {
  switch (action.type) {
    case 'EDIT_NAME':
      return action.name

    default:
      return state
  }
}

// This is what we call a selector
// it is a convenient data "unwrapper" that lives in the same file as the reducer
function getName(state) {
  if (state.length >= 1) {
    return `${state[0].toUpperCase()}${state.slice(1)}`
  }

  return 'Unknown'
}
