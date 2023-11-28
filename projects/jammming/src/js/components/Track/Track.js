import React from 'react';
import './Track.scss'; //

function Track({ track }) {
  return (
    <div className="track">
      <div className="track__image">
        <img src={ track.image.src || "not-set" } alt={track.name} width="100" height="100" />
      </div>
      <div className="track__info">
        <strong className="track__name">{track.name}</strong>
        <div className="track__meta">
          <span className="track__artist">{track.artist}</span>
          <span>•</span>
          <span className="track__album">{track.album}</span>
        </div>
      </div>
    </div>
  );
}

export default Track;