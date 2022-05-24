import { useDispatch, useSelector } from 'react-redux';
import { filterData } from 'redux/contacts/contactsActions';

export default function Search() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const handleSearchChange = e => {
    dispatch(filterData(e.currentTarget.value));
  };
  return (
    <>
      <input typ="text" value={filter} onChange={handleSearchChange} />
    </>
  );
}
