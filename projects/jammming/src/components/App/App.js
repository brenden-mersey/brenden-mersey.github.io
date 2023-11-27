import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import styles from './App.css';

function App() {
  return (
    <div className="grid-container">
      <h1>Welcome to Jammming!</h1>
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default App;
