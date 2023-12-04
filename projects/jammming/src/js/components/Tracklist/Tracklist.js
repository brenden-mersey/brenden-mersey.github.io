import React from 'react';
import Track from '../Track/Track';
import './Tracklist.scss'; //

function Tracklist({ tracks = [] }) {  
  return (
    <div className="tracklist">
      <div className="tracklist__container grid-container">
        <div className="tracklist__list">
          {tracks.map((track) => <Track key={track.id} track={track} /> )}
        </div>
      </div>
    </div>
  );
}

export default Tracklist;