import { createStore } from 'redux'
import rootReducer from '../reducer/index'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  if (module.hot) {
    module.hot.accept('../reducer', () => {
      const nextRootReducer = require('../reducer')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
