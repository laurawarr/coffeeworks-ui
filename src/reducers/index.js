import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import review from './review';
import browse from './browse';
import cafe from './cafe';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    review,
    browse,
    cafe,
  })

