import React from "react";
import "./main.css";
const Search = ({ searchChange }) => {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search..."
        className="searchBox"
        onChange={searchChange}
      />
    </div>
  );
};
export default Search;
