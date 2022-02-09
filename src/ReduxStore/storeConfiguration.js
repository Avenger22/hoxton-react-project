import {createStore} from 'redux'
import allReducers from '../Reducers/indexReducer'

export const storeConfiguration = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)