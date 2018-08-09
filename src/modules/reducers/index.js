import { combineReducers } from 'redux';
import filmReducers from './filmReducers';
import navReducers from './navReducers';

const rootReducer = combineReducers({
  filmReducers,
  navReducers
});

export default rootReducer;