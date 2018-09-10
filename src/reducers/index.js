import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import user from './user';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  user
});

export default rootReducer;