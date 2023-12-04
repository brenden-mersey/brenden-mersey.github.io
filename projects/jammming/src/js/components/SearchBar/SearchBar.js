import React, { useState } from 'react';
import Spotify from '../../utils/Spotify';
import './SearchBar.scss';

function SearchBar({ setSearchedTracks }) {
  
  const [ searchValue, setSearchValue ] = useState("");
  
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
    
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( searchValue ) {
      Spotify.search(searchValue).then(setSearchedTracks);
    } else {
      alert('Please enter a valid search term!');
    }
  }
  
  return (
    <div className="search-bar">
      <div className="search-bar__container">
        <form className="search-bar__form form" onSubmit={handleSubmit}>
          <div className="search-bar__form-field form__field">
            <input 
              className="search-bar__form-input form__input input input--primary" 
              id="search"
              name="search"
              type="text" 
              placeholder="What are you looking for?"
              value={searchValue} 
              onChange={handleChange} />
          </div>
          <button className="search-bar__form-button button button--primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;