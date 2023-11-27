import React, { useState } from 'react';
import styles from './SearchBar.module.css'; // Import css modules stylesheet as styles

function SearchBar() {
  
  const [ inputValue, setInputValue ] = useState("");
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  
  return (
    <form className="form">
      <label forHtml="search">Search</label>
      <input id="search" name="search" type="text" value={inputValue} onChange={handleChange} />
    </form>
  );
}

export default SearchBar;