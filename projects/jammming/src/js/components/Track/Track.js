import React from 'react';
import TrackImage from '../TrackImage/TrackImage';
import './Track.scss'; //

function Track({ track }) {
  
  const { album, artist, images, name, release_date, release_date_precision } = track;
  const trackImage = { alt: name, sizes: images || [] };
    
  return (
    <div className="track">
      <div className="track__image">
        { trackImage.sizes.length ? <TrackImage trackImage={trackImage} /> : "" }
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