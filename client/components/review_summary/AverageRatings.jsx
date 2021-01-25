import React from 'react';
import PropTypes from 'prop-types';
import { GrStar } from 'react-icons/gr';

import './AverageRatingsStyle.css';

function AverageRatings({ averageRatings }) {
  return (
    <div className="average-container">
      <div>
        <p>Average Customer Ratings</p>
      </div>

      <div className="overall">
        <p className="star-summary">
          Overall
        </p>
        <p className="star-icons">
          <GrStar size={20} color='#BE7B2C'/>
          <GrStar size={20} color='#BE7B2C'/>
          <GrStar size={20} color='#BE7B2C'/>
          <GrStar size={20} color='#BE7B2C'/>
          <GrStar size={20} color='#BE7B2C'/>
        </p>

        <p className="average-ratings">
          { averageRatings }
        </p>
      </div>
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
