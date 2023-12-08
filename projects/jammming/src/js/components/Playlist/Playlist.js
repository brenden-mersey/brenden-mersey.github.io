import React, { useState, useEffect } from 'react';
import Spotify from '../../utils/Spotify';
import Track from '../Track/Track';
import './Playlist.scss';

function Playlist({ playlistTracks, setPlaylistTracks }) {  
  
  const [ title, setTitle ] = useState("");
  
  useEffect(() => {
    localStorage.setItem( 'playlist', title );
  }, [ title ] );  
  
  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const playlistTrackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist( title, playlistTrackUris ).then(() => {
      setTitle("");
      setPlaylistTracks([]);
    });
  };
  
  return (
    <div className="playlist module">
      <div className="playlist__container module__container">
        <h3 className="playlist__heading module__heading">Create Playlist</h3>
        <form className="playlist__form form" onSubmit={handleSubmit}>
          <div className="playlist__form-field form__field">
            <input 
              className="playlist__form-input form__input input input--primary" 
              id="playlist_title" 
              name="playlist_title" 
              type="text"
              placeholder="Name your playlist"
              value={title}
              onChange={handleChange} />
          </div>
          <button 
            className="button button--primary" 
            type="submit">Save to Spotify</button>
        </form>
        <div className="playlist__tracks">
          { playlistTracks.map((track, index) => {
            return (
              <Track 
                key={index} 
                track={track} 
                index={index} 
                buttonAction="remove" 
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

export default Playlist;