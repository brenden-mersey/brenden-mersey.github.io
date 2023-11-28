import React from 'react';
import './Track.scss'; //

function Track({ name, artist, album }) {
  return (
    <div className="track">
      <div className="track__image">
        <img src="" alt="" width="100" height="100" />
      </div>
      <div className="track__info">
        <strong className="track__name">{name}</strong>
        <div className="track__meta">
          <span className="track__artist">{artist}</span>
          <span>•</span>
          <span className="track__album">{album}</span>
        </div>
      </div>
    </div>
  );
}

export default Track;