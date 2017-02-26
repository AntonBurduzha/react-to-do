import {createStore, combineReducers} from 'redux'
import taskReducer from './containers/reducers'

const reducers = {
  taskState: taskReducer
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;