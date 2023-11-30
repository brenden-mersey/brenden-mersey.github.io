import React from 'react';

function Link({ children, title, url }) {  
  return (
    <a href={url} title={title} target="_blank">
      {children}
    </a>
  );
}

export default Link;