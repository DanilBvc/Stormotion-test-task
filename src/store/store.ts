import { combineReducers, createStore } from 'redux';
import settingsReducer from './reducers/settingsReducer';

const rootReducer = combineReducers({ settingsReducer });
const store = createStore(rootReducer);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
