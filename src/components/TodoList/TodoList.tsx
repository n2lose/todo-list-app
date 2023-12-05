
import { useSelector } from "react-redux"
import Todo from "../Todo/Todo"
import { todoListRemainingSelector } from "../../redux/selectors"

const TodoList = () => {
    const todoList = useSelector(todoListRemainingSelector)
  return (
    <>
        {todoList.length === 0 && <h3>There is no todo item.</h3>}
        
        {todoList.length > 0 && todoList.map( todo => (
            <Todo key={todo.id} {...todo} />
        ))}
    </>
  )
}

export default TodoList