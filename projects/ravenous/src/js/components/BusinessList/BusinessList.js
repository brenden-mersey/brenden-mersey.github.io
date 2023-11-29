import React from 'react';
import Business from '../Business/Business';
import './BusinessList.scss';

function BusinessList({ searchResults }) {  
  return (
    <div className="business-list">
      <div className="business-list__container grid-container">
        <div className="business-list__list">
          {searchResults.map((business, index) => <Business key={business.id} business={business} /> )}
        </div>
      </div>
    </div>
  );
}

export default BusinessList;