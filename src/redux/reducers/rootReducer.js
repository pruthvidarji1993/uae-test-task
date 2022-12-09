// Redux Imports
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers Imports
import { login } from './auth/loginReducer';

const persistConfig = {
  key: 'test-app-root',
  storage,
  whitelist: ['login'],
};

const rootReducer = combineReducers({
  login: login,
});

export default persistReducer(persistConfig, rootReducer);
