import React from 'react';
import PropTypes from 'prop-types';
import { GrStar } from 'react-icons/gr';

function AverageRatings({ averageRatings }) {
  return (
    <div>
      <p>Average Customer Ratings</p>
      <p>
        Overall <GrStar size={20} color='#BE7B2C'/> <GrStar size={20} color='#BE7B2C'/> <GrStar size={20} color='#BE7B2C'/> <GrStar size={20} color='#BE7B2C'/> <GrStar size={20} color='#BE7B2C'/>
        { averageRatings }
      </p>
    </div>
  );
}

AverageRatings.defaultProps = {
  averageRatings: 0,
};

AverageRatings.propTypes = {
  averageRatings: PropTypes.number,
};

export default AverageRatings;
