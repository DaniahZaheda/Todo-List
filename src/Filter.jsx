

function Filter({ setFilter }) {
  return (
    <div className="select">
      <select onChange={(e) => setFilter(e.target.value)} className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}

export default Filter;
