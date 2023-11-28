import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Tracklist from '../Tracklist/Tracklist';

import TRACKS from '../../test-data/tracks';

function App() {
  
  const [ searchResults, setSearchResults ] = useState([]);
  const [ playlistName, setPlaylistName ] = useState("New Playlist");
  const [ playlistTracks, setPlaylistTracks ] = useState([]);
  
  return (
    <>
      <main className="main" id="main" role="main">
        <Header />
        <SearchBar setSearchResults={setSearchResults} />
        <SearchResults searchResults={searchResults} />
        <Tracklist playlistTracks={playlistTracks} />
      </main>
      <Footer />
    </>
  );
  
}

export default App;
