import {createStore, combineReducers} from 'redux';
import themReducer from './reducers/them';

const rootReducer = () =>
  combineReducers({
    them: themReducer,
  });

export default createStore(rootReducer);
