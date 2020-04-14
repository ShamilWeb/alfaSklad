import {createStore, combineReducers} from 'redux';
import navigationReducer from './reducers/navigate';
import themReducer from './reducers/them';
import firebaseReducer from './reducers/firebase';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  them: themReducer,
  firebase: firebaseReducer,
});

export default createStore(rootReducer);
