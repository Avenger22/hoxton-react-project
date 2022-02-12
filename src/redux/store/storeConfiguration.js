import {createStore, compose, applyMiddleware} from 'redux'
import allReducers from '../reducers/indexReducer'
import thunk from "redux-thunk"
import { devToolsEnhancer } from '@redux-devtools/extension';

export const storeConfiguration = createStore(
    allReducers,
    devToolsEnhancer()
    // applyMiddleware(thunk)
    // compose (
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
)