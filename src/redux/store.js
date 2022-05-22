import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { itemsReducer } from './actions/reducer';

export const store = configureStore({
  reducer: {
    contacts: combineReducers({
      items: itemsReducer,
    }),
  },
});
