import Phonebook from './Phonebook/Phonebook';
import Search from './Search/Search';
import TodoRender from './TodosRender/TodosRender';

export default function App() {
  return (
    <div>
      <Phonebook />
      <Search />
      <TodoRender />
    </div>
  );
}
