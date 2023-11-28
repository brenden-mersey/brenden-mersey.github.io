import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

import TRACKS from '../../data/tracks';

function App() {
  
  const [ searchResults, setSearchResults ] = useState([]);
  const [ playlistName, setPlaylistName ] = useState("New Playlist");
  const [ playlistTracks, setPlaylistTracks ] = useState(TRACKS);
  
  return (
    <>
      <Main 
        playlistName={playlistName}
        playlistTracks={playlistTracks} />
      <Footer />
    </>
  );
  
}

export default App;
