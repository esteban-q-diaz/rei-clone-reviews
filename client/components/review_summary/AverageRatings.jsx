import React from 'react';
import PropTypes from 'prop-types';

function AverageRatings({ averageRatings }) {
  console.log('average', averageRatings);
  return (
    <div>
      <p>Average Customer Ratings</p>
      <p>
        Overall ☆☆☆☆☆
        { averageRatings }
      </p>
    </div>
  );
}

AverageRatings.propTypes = {
  averageRatings: PropTypes.number.isRequired,
};

export default AverageRatings;
