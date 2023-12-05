import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux"
import filterSlice from "../../redux/filterSlice";



const FiltersByPriority = () => {
  const dispatch = useDispatch();
  
  const [priorities, setPriorities] = useState<String[]>([]);

  const handleFilterByPriorities = (e: ChangeEvent<HTMLInputElement>)=> {
    let currentList = [...priorities];
    if(e.target.checked) {
      currentList = [...priorities, e.target.value]
    } else {  
      currentList.splice(priorities.indexOf(e.target.value), 1)
    }
    
    setPriorities(currentList);
    dispatch(filterSlice.actions.filterPriorities(currentList));
  }

  return (
    <div className="filters filters-by-priority">
      <div className="priority">
        <input id="checkbox-1" name="checkbox" type="checkbox" value="High" onChange={handleFilterByPriorities} />
        <label htmlFor="checkbox-1" className="radio-label">High</label>
      </div>
      <div className="priority">
        <input id="checkbox-2" name="checkbox" type="checkbox" value="Medium" onChange={handleFilterByPriorities}  />
        <label htmlFor="checkbox-2" className="radio-label">Medium</label>
      </div>
      <div className="priority">
        <input id="checkbox-3" name="checkbox" type="checkbox" value="Low" onChange={handleFilterByPriorities}  />
        <label htmlFor="checkbox-3" className="radio-label">Low</label>
      </div>
    </div>  
  )
}

export default FiltersByPriority