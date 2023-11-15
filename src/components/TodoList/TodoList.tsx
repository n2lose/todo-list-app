
import Todo from "../Todo/Todo"

const TodoList = () => {
    const todoList = [
        {
            "id": "1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
            "completed": false,    
            "priority": "high"        
        },
        {
            "id": "2",
            "text": "Do something nice for someone I care about",
            "completed": false,    
            "priority": "medium"              
        },
        {
            "id": "3",
            "text": "Do something nice for someone I care about",
            "completed": false,    
            "priority": "low"              
        },
    ] 
  return (
    <>
        {todoList.length === 0 && <h3>There is no todo item.</h3>}
        
        {todoList.length > 0 && todoList.map( todo => (
            <Todo {...todo} />
        ))}
    </>
  )
}

export default TodoList