import React from 'react';
import ButtonAddTrack from '../ButtonAddTrack/ButtonAddTrack';
import IconAdd from '../IconAdd/IconAdd';
import IconRemove from '../IconRemove/IconRemove';
import TrackImage from '../TrackImage/TrackImage';
import './Track.scss'; //

function Track(props) {
  
  const { 
    buttonAction, 
    index, 
    playlistTracks, 
    setPlaylistTracks,
    track 
  } = props;
  
  const buttonIcon = buttonAction === "add" ? <IconAdd /> : <IconRemove />;
  const trackImage = { alt: track.name, sizes: track.images || [] };
  
  const handleClick = (e) => {
    
    let newTrackList = []
    
    switch( buttonAction ) {
      case 'add': {        
        let inArray = playlistTracks.some((item) => item.id === track.id );
        if ( !inArray ) {
          newTrackList = [...playlistTracks, track];
        } else {
          newTrackList = playlistTracks;
        }
        break;
      }
      case 'remove': {
        newTrackList = playlistTracks.filter((_, i) => i !== index);
        break;
      }
    }
    
    setPlaylistTracks(newTrackList);
    
  };
    
  return (
    <div className="track" id={track.id}>
      <div className="track__image">
        { trackImage.sizes.length ? <TrackImage trackImage={trackImage} /> : "" }
      </div>
      <div className="track__info">
        <strong className="track__name">{track.name}</strong>
        <div className="track__artist">{track.artist}</div>
        <div className="track__album">{track.album}</div>
      </div>
      <div className="track__controls">
        <button 
          className="button button--secondary" 
          type="button"
          onClick={handleClick}
          >{buttonIcon}</button>
      </div>
    </div>
  );
  
}

export default Track;