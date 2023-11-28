import React, { useState } from 'react';
import styles from './SearchBar.scss'; // Import css modules stylesheet as styles

function SearchBar() {
  
  const [ inputValue, setInputValue ] = useState("");
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  
  return (
    <form className="form">
      <div className="form__container grid-container">
        <div className="form__field">
          <label className="form__label"  htmlFor="search">Search</label>
          <input className="form__input" id="search" name="search" type="text" value={inputValue} onChange={handleChange} />
        </div>
        <div className="form__test">You're looking for: <strong>{inputValue}</strong></div>
      </div>
    </form>
  );
}

export default SearchBar;