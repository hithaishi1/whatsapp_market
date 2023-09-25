// SearchBar.js
import React, { useState } from 'react';
import './css/SearchBar.css'; // Create a CSS file for styling

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchText);
  };

  return (
    <form className="search-bar" onSubmit={handleSearchSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Search items"
        value={searchText}
        onChange={handleSearchChange}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
