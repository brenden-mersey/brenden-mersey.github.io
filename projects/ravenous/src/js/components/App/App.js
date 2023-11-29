import React, { useState, useEffect } from 'react';
import BusinessList from '../BusinessList/BusinessList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';

// https://mockaroo.com/
import MOCK_BUSINESSES from "../../../mock-data/business-list.json";

function App() {

  const [ searchResults, setSearchResults ] = useState([]);

  return (
    <>
      <main className="main" id="main" role="main">
        <Header />
        <SearchBar setSearchResults={setSearchResults} />
        <BusinessList searchResults={searchResults} />
      </main>
      <Footer />
    </>
  );
  
}

export default App;
