import { createStore, compose } from 'redux'
import reducers from '../reducers'
import {userInitialState} from './initialState'

const store = createStore(
    reducers,
    userInitialState,
    compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store
