import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './Search.scss';

export default function Search(props) {
  return (
    <div className="search module">
      <div className="search__container module__container">
        <h3 className="search__heading module__heading">Track search (song name, artist, album, etc.)</h3>
        {props.children}
      </div>
    </div>
  );
}

