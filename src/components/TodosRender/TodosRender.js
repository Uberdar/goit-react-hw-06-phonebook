import { useDispatch, useSelector } from 'react-redux';
import { deleteidAction } from '../../redux/contacts/contactsActions';

export default function TodoRender() {
  const filter = useSelector(state => state.contacts.filter);
  // console.log('filter: ', filter);
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);
  // console.log('items: ', items);
  const filtereditems = items.filter(elem =>
    elem.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  // console.log('filtereditems: ', filtereditems);
  const rendernewElem = () => {
    return filtereditems.map(elem => {
      return (
        <div key={elem.id}>
          <span>name: {elem.name} </span>
          <span>number: {elem.number} </span>
          <button
            type="button"
            id={elem.id}
            onClick={() => dispatch(deleteidAction(elem.id))}
          >
            Delete
          </button>
        </div>
      );
    });
  };
  return (
    <>
      <h2>Contacts</h2>
      {rendernewElem()}
    </>
  );
}
