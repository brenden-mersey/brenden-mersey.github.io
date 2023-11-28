import React from 'react';
import Track from '../Track/Track';
import './Tracklist.scss'; //

function Tracklist({ playlistTracks = [] }) {  
  return (
    <div className="tracklist">
      <div className="tracklist__container grid-container">
        {console.log('tracklist ::')}
        <div className="tracklist__list">
          {playlistTracks.map((track) => {
            const { id } = track;
            return <Track key={id} track={track} />
          })}
        </div>
      </div>
    </div>
  );
}

export default Tracklist;