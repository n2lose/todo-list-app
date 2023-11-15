import './App.css'
import Filters from './components/Filters/Filters'
import AddNewTodo from './components/Todo/AddNewTodo'
import TodoList from './components/TodoList/TodoList';
import Divider from './components/utils/Divider';

function App() {
  return (
    <>      
      <div className="container">
        <h1>Todo List App</h1>   
        <AddNewTodo />
        <Divider />
        <Filters />
        <Divider />
        <TodoList />
      </div>     
    </>
  )
}

export default App
