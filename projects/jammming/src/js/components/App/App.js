import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Playlist from '../Playlist/Playlist';
import Search from '../Search/Search';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

// https://mockaroo.com/
import MOCK_TRACKS from "../../mock-data/tracks.json";

function App() {
  
  const [ searchedTracks, setSearchedTracks ] = useState([]);
  const [ playlistName, setPlaylistName ] = useState("New Playlist");
  const [ playlistTracks, setPlaylistTracks ] = useState([]);
    
  return (
    <>
      <Header />
      <main className="main" id="main" role="main">
        <div className="main__container grid-container">
          <Search>
            <SearchBar 
              setSearchedTracks={setSearchedTracks} />
            <SearchResults 
              searchedTracks={searchedTracks} 
              playlistTracks={playlistTracks} 
              setPlaylistTracks={setPlaylistTracks} />
          </Search>
          <Playlist 
            playlistTracks={playlistTracks} 
            setPlaylistTracks={setPlaylistTracks} />
        </div>
      </main>
      <Footer />
    </>
  );
  
}

export default App;
