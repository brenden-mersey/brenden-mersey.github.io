import React, { useState, useEffect } from 'react';
import BusinessList from '../BusinessList/BusinessList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';

// https://mockaroo.com/
import MOCK_BUSINESSES from "../../../mock-data/business-list.json";

function App() {

  const [ searchResults, setSearchResults ] = useState([]);
  
  useEffect(() => {
      
    const url = "";
    
    const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          console.log(json);
          //setSearchResults([]);
        } catch (error) {
          setSearchResults(MOCK_BUSINESSES);
        }
    };
    
    fetchData();
  
  }, []);

  return (
    <>
      <main className="main" id="main" role="main">
        <Header />
        <SearchBar />
        <BusinessList list={searchResults} />
      </main>
      <Footer />
    </>
  );
  
}

export default App;
