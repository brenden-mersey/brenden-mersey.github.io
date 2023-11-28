import React, { useState } from 'react';
import Spotify from '../../utils/Spotify';
import './SearchBar.scss';

function SearchBar({ setSearchResults }) {
  
  const [ inputValue, setInputValue ] = useState("");
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
    
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( inputValue ) {
      Spotify.search(inputValue).then(setSearchResults);
    } else {
      alert('Please enter a valid search term!');
    }
  }
  
  return (
    <div className="search-bar">
      <div className="search-bar__container grid-container">
        <form className="search-bar__form" onSubmit={handleSubmit}>
          <div className="search-bar__form-field">
            <input 
              className="search-bar__form-input input input--primary" 
              id="search"
              name="search"
              type="text" 
              placeholder="What are you looking for?"
              value={inputValue} 
              onChange={handleChange} />
          </div>
          <button className="search-bar__form-button button button--primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;