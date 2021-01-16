import React from 'react';

function AverageRatings({averageRatings}) {
  console.log('average', averageRatings)
  return (
    <div>
      <p>Average Customer Ratings</p>
      <p>Overall ☆☆☆☆☆ {averageRatings} </p>
    </div>
  );
}

export default AverageRatings;
