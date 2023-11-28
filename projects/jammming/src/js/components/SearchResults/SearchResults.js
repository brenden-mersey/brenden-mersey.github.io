import React from 'react';
import Track from '../Track/Track';
import './SearchResults.scss'; // Import css modules stylesheet as styles

function SearchResults({ searchResults = [] }) {
  return (
    <div className="search-results">
      <div className="search-results__container grid-container">
        <div className="search-results__list">
          {searchResults.map((track) => {
            const { id } = track;
            return <Track key={id} track={track} />
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;