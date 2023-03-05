import { createStore, combineReducers } from 'redux';

import user from './user';

export const store = createStore(
  combineReducers({
    user,
  }),
  {},
);
