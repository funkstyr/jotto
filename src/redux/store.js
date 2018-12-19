import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'

export const middlewares = [ReduxThunk]
export default applyMiddleware(...middlewares)(createStore(reducers))