// Basic usage for React

import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// MyRootComponent.js
const store = createStore(name, 'Yurick')

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
const MyChildComponent = () => (
  <article>
    <h1>Child title</h1>
    <MyGrandsonComponent />
  </article>
)

// MyGrandsonComponent.js
function mapStateToProps(state) {
  return {
    name: getName(state)
  }
}

const MyGrandsonComponent = connect(mapStateToProps, actions)(({ name }) => (
  <p>
    Hello, my name is {name}
    <button onClick={dispatch({ type: 'EDIT_NAME', name: 'Roberto' })}>
      Change my name to Roberto
    </button>
  </p>
))

// name.js (reducer)
function name(state = '', action) {
  switch(action.type) {
    case 'EDIT_NAME':
      return action.name

    default:
      return state
  }
}

// selector
function getName(state) {
  return state
}
