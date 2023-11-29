import React, { useState, useEffect } from 'react';
import './SearchBar.scss';

function SearchBar(props) {

  const [ searchValue, setSearchValue ] = useState("");
  const [ locationValue, setLocationValue ] = useState("");
  let heroImagePath;
  
  useEffect(() => {}, []);
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    switch (name) {
      case 'search': {
        setSearchValue(value);
        break;
      }
      case 'location': {
        setLocationValue(value);
        break;
      }
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  function getRandomHeroImagePath() {
    const randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    return `/img/search-hero-0${randomNumber}.jpg`;
  }

  return (
    <div className="search-bar">
      <div className="search-bar__image">
        <img src={getRandomHeroImagePath()} alt="Search Bar Hero" />
      </div>
      <div className="search-bar__container grid-container">
        <form className="search-bar__form form" onSubmit={handleSubmit}>
          <div className="search-bar__form-row">
            <div className="search-bar__form-field">
              <input 
                className="search-bar__input input" 
                name="search"
                id="search" 
                type="text" 
                placeholder="What are you looking for?"
                value={searchValue}
                onChange={handleInputChange} />
            </div>
            <div className="search-bar__form-field">
              <input 
                className="search-bar__input input" 
                name="location" 
                id="location" 
                type="text" 
                placeholder="In what city?"
                value={locationValue} 
                onChange={handleInputChange} />
            </div>
          </div>
          <div className="search-bar__form-action">
            <button className="search-bar__button button" type="submit">Let's Go Baby.</button>
          </div>
        </form>
      </div>
    </div>
  );

}

export default SearchBar;