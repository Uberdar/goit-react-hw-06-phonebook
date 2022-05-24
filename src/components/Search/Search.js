import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchAction, showAll } from 'redux/contacts/action';

export default function Search() {
  //   const contacts = useSelector(state => state.contacts.items);
  //   console.log('contacts: ', contacts);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  console.log('searchValue: ', searchValue);
  useEffect(() => {
    if (searchValue === '') {
      dispatch(showAll());
      console.log('xxx');
    }
    dispatch(searchAction(searchValue));
  }, [searchValue]);
  const handleSearchChange = e => {
    setSearchValue(e.currentTarget.value);
    console.log('searchValue: ', searchValue);
  };
  return (
    <>
      <input typ="text" onChange={handleSearchChange}></input>
    </>
  );
}
