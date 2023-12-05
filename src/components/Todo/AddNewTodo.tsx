
import { useDispatch } from 'react-redux';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import todoListslice from '../../redux/todoListslice';

const AddNewTodo = () => {
  const dispatch = useDispatch();

  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');
  

  const handleAddTodo = ()=> {
    dispatch(todoListslice.actions.addTodo({
      id: uuidv4(),
      text: todoName,
      priority: priority,
      completed: false
    }))
  }

  return (
    <>
        <div className="todo-add-new">
            <input type="text" value={todoName} onChange={(e)=> setTodoName(e.target.value)} placeholder="Add new todo item..." />
            <select value={priority} onChange={(e)=> setPriority(e.target.value)}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <button onClick={handleAddTodo}>Add</button>
        </div>
    </>
  )
}

export default AddNewTodo