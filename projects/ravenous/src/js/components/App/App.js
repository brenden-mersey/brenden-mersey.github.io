import React, { useState } from 'react';
import BusinessList from '../BusinessList/BusinessList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {

  const [ searchResults, setSearchResults ] = useState([]);

  return (
    <>
      <main className="main" id="main" role="main">
        <Header />
      </main>
      <Footer />
    </>
  );
  
}

export default App;
