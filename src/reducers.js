import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  // Add other reducers here if needed
});

export default rootReducer;
