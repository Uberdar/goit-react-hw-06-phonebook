import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { itemsReducer } from './contacts/reducer';

export const store = configureStore({
  reducer: {
    contacts: combineReducers({
      items: itemsReducer,
    }),
  },
});
