import { combineReducers } from 'redux';
// import all reducers for state
import charReducer from './charReduce';

const allReducers = combineReducers({
    charReducer
})

export default allReducers;