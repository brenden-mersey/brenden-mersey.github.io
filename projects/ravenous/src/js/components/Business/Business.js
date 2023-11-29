import React from 'react';
import './Business.scss';

function Business(props) {
  
  const {
    name = "MarginOtto Pizeria",
    categories = [],
    rating = 1.5,
    review_count = 15,
    image_url = "",
    url = ""
  } = props.business;
  
  const { 
    address1, 
    address2, 
    city, 
    country, 
    state, 
    zip_code 
  } = props.business.location;
  
  const category = "Update Me"; // from categories above
  const stars = `${rating} rating` + ( rating > 1 ? "s" : "" );
  const reviews = `${review_count} review` + ( review_count > 1 ? "s" : "" );
  const businessImage = image_url ? <img src={image_url} alt={name} /> : "";
  
  return (
    <div className="business">
      <div className="business__image">{businessImage}</div>
      <div className="business__details">
        <h3 className="business__name">{name}</h3>
        <div className="business__info">
          <div className="business__address">
            <span className="business__address-street">{address1}</span>
            <span className="business__address-city">{city}</span>
            <span className="business__address-postal">{state} {zip_code}</span>
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