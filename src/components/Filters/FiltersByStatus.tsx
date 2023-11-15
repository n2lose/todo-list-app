const FiltersByStatus = () => {
  return (
    <div className="filters filters-by-status">
      <div className="radio">
        <input id="radio-1" name="radio" type="radio" checked />
        <label htmlFor="radio-1" className="radio-label">All</label>
      </div>
      <div className="radio">
        <input id="radio-2" name="radio" type="radio" />
        <label htmlFor="radio-2" className="radio-label">Completed</label>
      </div>
      <div className="radio">
        <input id="radio-3" name="radio" type="radio" />
        <label htmlFor="radio-3" className="radio-label">Active</label>
      </div>
    </div>  
  );
};

export default FiltersByStatus;
