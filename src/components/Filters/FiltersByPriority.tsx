

const FiltersByPriority = () => {
  return (
    <div className="filters filters-by-priority">
      <div className="priority">
        <input id="checkbox-1" name="checkbox" type="checkbox"/>
        <label htmlFor="checkbox-1" className="radio-label">High</label>
      </div>
      <div className="priority">
        <input id="checkbox-2" name="checkbox" type="checkbox" />
        <label htmlFor="checkbox-2" className="radio-label">Medium</label>
      </div>
      <div className="priority">
        <input id="checkbox-3" name="checkbox" type="checkbox" />
        <label htmlFor="checkbox-3" className="radio-label">Low</label>
      </div>
    </div>  
  )
}

export default FiltersByPriority