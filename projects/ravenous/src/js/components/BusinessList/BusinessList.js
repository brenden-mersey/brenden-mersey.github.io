import React from 'react';
import Business from '../Business/Business';

function BusinessList(props) {
  const { list = [] } = props;
  return (
    <div>
      {list.map((business) => <Business business={business} /> )}
    </div>
  );
}

export default BusinessList;