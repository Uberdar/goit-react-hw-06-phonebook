import { useDispatch, useSelector } from 'react-redux';
import { deleteidAction } from '../../redux/contacts/action';

export default function TodoRender() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);

  const rendernewElem = () => {
    return items.map(elem => {
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
