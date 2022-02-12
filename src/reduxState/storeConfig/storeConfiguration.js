import {createStore, compose, applyMiddleware} from 'redux'
import allReducers from '../reducers/indexReducer'
import thunk from "redux-thunk"

export const storeConfiguration = createStore(
    allReducers,
    // applyMiddleware(thunk)
    // compose (
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
)