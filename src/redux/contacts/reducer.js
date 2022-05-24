import { createReducer } from '@reduxjs/toolkit';
import { deleteidAction, addAction, searchAction, showAll } from './action';

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
    [searchAction]: (state, action) => {
      return state.filter(elem =>
        elem.name
          .toLocaleLowerCase()
          .includes(action.payload.toLocaleLowerCase())
      );
    },
    [showAll]: () => {
      let getLocalStorage = localStorage.getItem('localDB');
      let parceLocalStorage = JSON.parse(getLocalStorage);
      return parceLocalStorage;
    },
  }
);
