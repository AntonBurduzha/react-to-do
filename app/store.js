import {createStore, combineReducers} from 'redux'
import testReducer from './containers/App/reducers'

const reducers = {
  testState: testReducer
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;