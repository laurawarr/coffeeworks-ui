// import '@babel/polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux' // compose
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import promise from 'redux-promise'
import { createLogger } from 'redux-logger'
import createRootReducer from './reducers'

import './index.css';
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';

let store
let middleware
const history = createBrowserHistory();

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger()
  middleware = applyMiddleware(routerMiddleware(history), promise, thunkMiddleware, logger)
  store = createStore(createRootReducer(history), middleware)
} else {
  middleware = applyMiddleware(routerMiddleware(history), promise, thunkMiddleware)
  store = createStore(createRootReducer(history), middleware)
}

// Allow access to redux store on window
window.REDUX_STORE = store

// Backend API url
window.API = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'http://coffeeworks.io';

ReactDOM.render(
  <Provider store={store}>
    <Root history={history} />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

