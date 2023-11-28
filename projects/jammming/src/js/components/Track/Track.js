import React from 'react';
import TrackImage from '../TrackImage/TrackImage';
import './Track.scss'; //

function Track({ track }) {
  
  const trackImage = {
    alt: track.name || "",
    src: track.image?.src || "",
    width: 100,
    height: 100
  };
  
  return (
    <div className="track">
      <div className="track__image">
        { trackImage.src ? <TrackImage trackImage={trackImage} /> : "" }
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