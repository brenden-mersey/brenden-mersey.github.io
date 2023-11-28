import React from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Tracklist from '../Tracklist/Tracklist';

function Main({ playlistName = "", playlistTracks = [] }) {  
  return (
    <main className="main" role="main">
      <Header />
      <SearchBar />
      <SearchResults />
      <Tracklist playlistTracks={playlistTracks} />
    </main>
  );
}

export default Main;
