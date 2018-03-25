import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './container/App'
import storeConfig from './store/storeConfig'

const store = storeConfig()
const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, rootElement)
