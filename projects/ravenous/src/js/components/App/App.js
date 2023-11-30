import React, { useState, useEffect } from 'react';
import BusinessList from '../BusinessList/BusinessList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';

// https://mockaroo.com/
// import MOCK_BUSINESSES from "../../../mock-data/business-list.json";

const getRandomHeroImagePath = () => {
  const randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  return `/img/search-hero-0${randomNumber}.jpg`;
}

function App() {

  const [ searchResults, setSearchResults ] = useState([]);
  const heroImage = getRandomHeroImagePath();

  return (
    <>
      <main className="main" id="main" role="main">
        <Header />
        <SearchBar heroImage={heroImage} setSearchResults={setSearchResults} />
        <BusinessList searchResults={searchResults} />
      </main>
      <Footer />
    </>
  );
  
}

export default App;
