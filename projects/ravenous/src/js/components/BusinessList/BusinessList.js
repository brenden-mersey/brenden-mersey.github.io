import React from 'react';
import Business from '../Business/Business';
import './BusinessList.scss';

function BusinessList({ list }) {  
  return (
    <div className="business-list">
      <div className="business-list__container grid-container">
        <div className="business-list__list">
          {list.map((business, index) => <Business key={index + "-" + business.name} business={business} /> )}
        </div>
      </div>
    </div>
  );
}

export default BusinessList;