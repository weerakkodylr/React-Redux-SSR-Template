import { applyMiddleware, createStore } from 'redux'
import Thunk from 'redux-thunk'
//import Promise from 'redux-promise-middleware'

import reducer from './reducers'

const middleware = applyMiddleware(Thunk)//, createLogger())

export default createStore(reducer, middleware);