import React, { useState, useEffect, useRef } from 'react';
import Yelp from '../../utils/Yelp';
import './SearchBar.scss';

function SearchBar({ heroImage, setSearchResults }) {
  
  const [ search, setSearch ] = useState("");
  const [ location, setLocation ] = useState("");
  const [ sortBy, setSortBy ] = useState("best_match");
  
  const isInitialMount = useRef(true);
  
  useEffect(() => {
    if (isInitialMount.current) {
       isInitialMount.current = false;
    } else {
      Yelp.search( location, search, sortBy ).then(setSearchResults);
    }
  }, [ sortBy ]);
  
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case 'location': {
        setLocation(value);
        break;
      }
      case 'search': {
        setSearch(value);
        break;
      }
      case 'sort': {
        setSortBy(value);
        break;
      }
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    Yelp.search( location, search, sortBy ).then(setSearchResults);
  };

  return (
    <div className="search-bar">
      <div className="search-bar__image">
        <img src={heroImage} alt="Search Bar Hero" />
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
                value="best_match"
                checked={sortBy === "best_match"}
                onChange={handleInputChange} />
              <label className="search-bar__label label" htmlFor="best-match">Best <br />Match</label>
              <input 
                className="search-bar__input input" 
                name="sort"
                id="highest-rated" 
                type="radio" 
                value="rating"
                checked={sortBy === "rating"}
                onChange={handleInputChange} />
              <label className="search-bar__label label" htmlFor="highest-rated">Highest <br />Rated</label>
              <input 
                className="search-bar__input input" 
                name="sort"
                id="most-reviewed" 
                type="radio" 
                value="review_count"
                checked={sortBy === "review_count"}
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
                value={search}
                onChange={handleInputChange} />
            </div>
            <div className="search-bar__form-field">
              <input 
                className="search-bar__input input" 
                name="location" 
                id="location" 
                type="text" 
                placeholder="In what city?"
                value={location} 
                onChange={handleInputChange} />
            </div>
          </div>
          <div className="search-bar__form-action">
            <button className="search-bar__button button" type="submit">Let's Go Baby.</button>
          </div>
        </form>
      </div>
      <div className="search-bar__results">
        <div>Search: <strong>{search}</strong></div>
        <div>Location: <strong>{location}</strong></div>
        <div>Sort by: <strong>{sortBy}</strong></div>
      </div>
    </div>
  );

}

export default SearchBar;