import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { deleteidAction, addAction, filterData } from './contactsActions';

//   setDataBase(dataBase.filter(elem => elem.id !== DBid));
// [{ id: 1, name: 'ttt', number: 200000 }]

export const itemsReducer = createReducer(
  () => {
    let getLocalStorage = localStorage.getItem('localDB');
    let parceLocalStorage = JSON.parse(getLocalStorage);
    return parceLocalStorage ?? [];
  },
  {
    [deleteidAction]: (state, action) => {
      const newContacts = state.filter(elem => elem.id !== action.payload);
      localStorage.setItem('localDB', JSON.stringify(newContacts));
      return newContacts;
    },
    [addAction]: (state, action) => {
      const contacts = [...state, action.payload];
      localStorage.setItem('localDB', JSON.stringify(contacts));
      return contacts;
    },
  }
);
export const filterReducer = createReducer('', {
  [filterData]: (state, action) => {
    return (state = action.payload);
  },
});
const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
export default contactsReducer;
