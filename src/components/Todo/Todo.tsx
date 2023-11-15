import PropTypes from "prop-types";

export interface TodoProps {
  id: string;
  text: string;
  completed: boolean;  
  priority: string;
  handleToggle?: (id: string) => void;
  handleRemove?: (id: string) => void;
}

const Todo = (props: TodoProps) => {
  console.log({ props });
  return (
    <div className="TodoItem">
        <h3>{props.text}</h3>                
        <div className="TodoItem-actions">
            <button>Toggle</button>                    
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
