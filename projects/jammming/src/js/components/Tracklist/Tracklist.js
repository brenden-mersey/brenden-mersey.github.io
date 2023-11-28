import React from 'react';
import Track from '../Track/Track';
import './Tracklist.scss'; //

function Tracklist({ playlistTracks = [] }) {  
  return (
    <div className="tracklist">
      <div className="tracklist__container grid-container">
        {console.log('tracklist ::')}
        <div className="tracklist__list">
          {playlistTracks.map((track, index) => {
            const { name, artist, album, id } = track;
            return <Track key={id} name={name} artist={artist} album={album} />
          })}
        </div>
      </div>
    </div>
  );
}

export default Tracklist;