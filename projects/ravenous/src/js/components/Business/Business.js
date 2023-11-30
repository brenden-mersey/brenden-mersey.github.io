import React from 'react';
import Link from '../Link/Link';
import './Business.scss';

const addressToDirections = ({ country = "", display_address = [], name = "" }) => {
  display_address = display_address.join(' ');
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(`${name} ${display_address} ${country}`);
};

function Business(props) {
  
  const {
    name = "MarginOtto Pizeria",
    categories = [],
    image_url = "",
    location = {},
    rating = 1.5,
    review_count = 15,
    url = ""
  } = props.business;
  
  location.name = name;
    
  const category = categories[0]?.title || "";
  const stars = `${rating} rating` + ( rating > 1 ? "s" : "" );
  const reviews = `${review_count} review` + ( review_count > 1 ? "s" : "" );
  const businessImage = image_url ? <img src={image_url} alt={name} /> : "";
  const businessDirectionsLink = addressToDirections(location);
  
  return (
    <div className="business">
      <div className="business__image">
        <Link url={url} title={name}>
          {businessImage}
        </Link>
      </div>
      <div className="business__details">
        <h3 className="business__name">{name}</h3>
        <div className="business__info">
          <div className="business__address">
            <Link url={businessDirectionsLink} title={name}>
              <span className="business__address-street">{location.address1}</span>
              <span className="business__address-city">{location.city}</span>
              <span className="business__address-postal">{location.state} {location.zip_code}</span>
            </Link>
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