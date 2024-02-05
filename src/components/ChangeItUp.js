import React from "react";

function SearchInput({ onChange }) {
  return (
    <input
      type="text"
      name="search"
      onChange={onChange}
      placeholder="Enter search term..."
    />
  );
}

function FilterSelect({ onChange }) {
  return (
    <select name="filter" onChange={onChange}>
      <option value="all">Select a filter...</option>
      <option value="completed">Completed</option>
      <option value="incomplete">Incomplete</option>
    </select>
  );
}

function ChangeItUp({ onChange }) {
  return (
    <div>
      <SearchInput onChange={onChange} />
      <FilterSelect onChange={onChange} />
    </div>
  );
}

export default ChangeItUp;

