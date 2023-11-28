import React from 'react';

function Business(props) {
  
  const {
    image = "",
    name = "MarginOtto Pizeria",
    address = "1234 Brooklyn St",
    city = "New York",
    state = "New York",
    zipcode = "11215-8405",
    category = "Italian",
    rating = 1.5,
    review_count = 15,
  } = props.business;
  
  const stars = `${rating} rating` + ( rating > 1 ? "s" : "" );
  const reviews = `${review_count} review` + ( review_count > 1 ? "s" : "" );
  const businessImage = image ? `<img src="${image}" alt="${name}" />` : "";
  
  return (
    <div className="business">
      <div className="business__image">{businessImage}</div>
      <div className="business__details">
        <h3 className="business__name">{name}</h3>
        <div className="business__info">
          <div className="business__address">{address}</div>
          <div className="business__meta">
            <span>{category}</span>
            <span>{stars}</span>
            <span>{reviews}</span>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Business;