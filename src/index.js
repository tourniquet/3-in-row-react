import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// components
import Board from './components/Board'

import reducer from './config/reducer'
const store = createStore(reducer)

const App = () => (
  <Provider store={store}>
    <Board />
  </Provider>
)

render(
  <App />,
  document.getElementById('container')
)

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// }
