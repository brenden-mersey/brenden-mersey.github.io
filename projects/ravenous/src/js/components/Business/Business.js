import React from 'react';
import './Business.scss';

function Business(props) {
  
  const {
    image = getImageByCategory(props.business.category),
    name = "MarginOtto Pizeria",
    address = "1234 Brooklyn St",
    city = "New York",
    state = "New York",
    zipcode = "90210",
    category = "Italian",
    rating = 1.5,
    review_count = 15,
  } = props.business;
  
  const stars = `${rating} rating` + ( rating > 1 ? "s" : "" );
  const reviews = `${review_count} review` + ( review_count > 1 ? "s" : "" );
  const businessImage = image ? <img src={image} alt={name} /> : "";
  
  function getImageByCategory(category =  "") {
    if ( category ) {
      return `/img/${category.toLowerCase()}.jpg`;
    }
  }
  
  return (
    <div className="business">
      <div className="business__image">{businessImage}</div>
      <div className="business__details">
        <h3 className="business__name">{name}</h3>
        <div className="business__info">
          <div className="business__address">
            <span className="business__address-street">{address}</span>
            <span className="business__address-city">{city}</span>
            <span className="business__address-postal">{state} {zipcode}</span>
          </div>
          <div className="business__meta">
            <span className="business__meta-category">{category}</span>
            <span className="business__meta-rating">{stars}</span>
            <span className="business__meta-review">{reviews}</span>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Business;