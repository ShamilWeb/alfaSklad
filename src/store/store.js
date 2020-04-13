import {createStore, combineReducers} from 'redux';
import navigationReducer from './reducers/navigate';
import themReducer from './reducers/them';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  them: themReducer,
});

export default createStore(rootReducer);
