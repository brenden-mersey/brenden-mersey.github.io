import React from 'react';

function TrackImage({ trackImage }) {
    
  const { alt, sizes } = trackImage;
  const srcset = srcsetFactory(sizes);
  const src = sizes[0].url;
  const width = sizes[0].width;
  const height = sizes[0].height;
  
  function srcsetFactory( images = [] ) {
    let srcset = "";
    images.forEach(( image, index ) => {
      srcset += index === 0 ? "" : ", ";
      srcset += `${image.url} ${image.width}w`;
    });
    return srcset;
  };
  
  return (
    <img loading="lazy" srcSet={srcset} src={src} alt={alt} width={width} height={height} />    
  );
  
}

export default TrackImage;