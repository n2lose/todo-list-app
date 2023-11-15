
const AddNewTodo = () => {

  return (
    <>
        <div className="todo-add-new">
            <input type="text" placeholder="Add new todo item..." />
            <select>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
            </select>
            <button>Add</button>
        </div>
    </>
  )
}

export default AddNewTodo