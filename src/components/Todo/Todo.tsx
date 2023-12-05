import { useState } from 'react';
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import todoListslice from '../../redux/todoListslice';

export interface AddTodoProps {
  id: string;
  text: string;
  completed: boolean;  
  priority: string;
  handleToggle?: (id: string) => void;
  handleRemove?: (id: string) => void;
}

const Todo = (props: AddTodoProps) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(props.completed)

  const handleToggle = (id: string)=> {
    setChecked( prevState => prevState = !prevState);
    dispatch(todoListslice.actions.toggleTodo(id))
  }

  return (
    <div className={checked ? "TodoItem completed" :  "TodoItem"}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => handleToggle(props.id)}
        />
        <h3>{props.text}</h3>                
        <div className="TodoItem-actions">
            <button onClick={()=> handleToggle(props.id)}>DONE</button>                    
            <label className={props.priority}>{props.priority}</label>
        </div>
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  completed: PropTypes.bool,
  handleToggle: PropTypes.func,
  handleRemove: PropTypes.func,
};

export default Todo;
