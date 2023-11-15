import FiltersByPriority from "./FiltersByPriority"
import FiltersByStatus from "./FiltersByStatus"
import FiltersByText from "./FiltersByText"


const Filters = () => {
  return (
    <>
    <FiltersByText />
    <FiltersByStatus />
    <FiltersByPriority />
    </>
  )
}

export default Filters