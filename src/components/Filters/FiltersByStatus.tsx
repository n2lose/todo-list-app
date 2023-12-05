import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import filterSlice from "../../redux/filterSlice";

const FiltersByStatus = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState('All');

  const handleFilterByStatus = (e : ChangeEvent<HTMLInputElement>) => {    
    setChecked(e.target.value);
    dispatch(filterSlice.actions.filterStatus(e.target.value));
  }

  return (
    <div className="filters filters-by-status">
      <div className="radio">
        <input id="radio-1" name="radio" type="radio" 
          value="All" 
          checked={checked === 'All'} 
          onChange={handleFilterByStatus} />
        <label htmlFor="radio-1" className="radio-label">All</label>
      </div>
      <div className="radio">
        <input id="radio-2" name="radio" type="radio" 
          value="Completed" 
          checked={checked === 'Completed'} 
          onChange={handleFilterByStatus} />
        <label htmlFor="radio-2" className="radio-label">Completed</label>
      </div>
      <div className="radio">
        <input id="radio-3" name="radio" type="radio" 
          value="Active" 
          checked={checked === 'Active'} 
          onChange={handleFilterByStatus} />
        <label htmlFor="radio-3" className="radio-label">Active</label>
      </div>
    </div>  
  );
};

export default FiltersByStatus;
