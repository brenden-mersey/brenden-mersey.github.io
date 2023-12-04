import React from 'react';
import Track from '../Track/Track';
import './SearchResults.scss'; // Import css modules stylesheet as styles

function SearchResults({ searchedTracks, playlistTracks, setPlaylistTracks }) {
  return (
    <div className="search-results">
      <div className="search-results__container">
        <div className="search-results__list">
          { searchedTracks.map((track, index) => {
            return (
              <Track 
                key={index} 
                track={track} 
                buttonAction="add"
                playlistTracks={playlistTracks}
                setPlaylistTracks={setPlaylistTracks}
              /> 
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;