import { useState } from "react";
import { useDispatch } from "react-redux";
import filterSlice from "../../redux/filterSlice";


const FiltersByText = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const handleSearch = ()=> {
    dispatch(filterSlice.actions.filterSearch(searchText));    
  }
  return (    
    <div className="filters todo-add-new">
        <input type="text" placeholder="Search todo by name..." onKeyUp={handleSearch} value={searchText} onChange={e => setSearchText(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default FiltersByText