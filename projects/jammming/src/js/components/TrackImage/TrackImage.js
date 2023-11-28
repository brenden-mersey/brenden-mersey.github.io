import React from 'react';

function TrackImage({ trackImage }) {
  return (
    <img src={trackImage.src} alt={trackImage.alt} width={trackImage.width} height={trackImage.height} /> 
  );
}

export default TrackImage;