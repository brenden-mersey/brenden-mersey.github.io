import React, { useState, useEffect } from 'react';
import './SearchBar.scss';

function getRandomHeroImagePath() {
  const randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  return `/img/search-hero-0${randomNumber}.jpg`;
}

function SearchBar(props) {

  const [ searchValue, setSearchValue ] = useState("");
  const [ locationValue, setLocationValue ] = useState("");
  const [ sortValue, setSortValue ] = useState("best-match");
    
  useEffect(() => {}, []);
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    switch (name) {
      case 'location': {
        setLocationValue(value);
        break;
      }
      case 'search': {
        setSearchValue(value);
        break;
      }
      case 'sort': {
        setSortValue(value);
        break;
      }
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-bar">
      <div className="search-bar__image">
        <img src={getRandomHeroImagePath()} alt="Search Bar Hero" />
      </div>
      <div className="search-bar__container grid-container">
        <form className="search-bar__form form" onSubmit={handleSubmit}>
          <div className="search-bar__form-row sort">
            <div className="search-bar__form-field radio">
              <input 
                className="search-bar__input input" 
                name="sort"
                id="best-match" 
                type="radio" 
                value="best-match"
                checked={sortValue === "best-match"}
                onChange={handleInputChange} />
              <label className="search-bar__label label" htmlFor="best-match">Best <br />Match</label>
              <input 
                className="search-bar__input input" 
                name="sort"
                id="highest-rated" 
                type="radio" 
                value="highest-rated"
                checked={sortValue === "highest-rated"}
                onChange={handleInputChange} />
              <label className="search-bar__label label" htmlFor="highest-rated">Highest <br />Rated</label>
              <input 
                className="search-bar__input input" 
                name="sort"
                id="most-reviewed" 
                type="radio" 
                value="most-reviewed"
                checked={sortValue === "most-reviewed"}
                onChange={handleInputChange} />
              <label className="search-bar__label label" htmlFor="most-reviewed">Most <br />Reviewed</label>
            </div>
          </div>
          <div className="search-bar__form-row search">
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
      <div className="search-bar__results">
        <div>Search: <strong>{searchValue}</strong></div>
        <div>Location: <strong>{locationValue}</strong></div>
        <div>Sort by: <strong>{sortValue}</strong></div>
      </div>
    </div>
  );

}

export default SearchBar;