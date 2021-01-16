import React from 'react';
import Filters from './Filters.jsx';
import AverageRatings from './AverageRatings.jsx';

function ReviewSnapshot( { ratingsCount }) {
  return (
    <div>
      <p>Rating Snapshot</p>
      <p>Select a row below to filter reviews.</p>
      <p>5☆ {ratingsCount.five}</p>
      <p>4☆ {ratingsCount.four}</p>
      <p>3☆ {ratingsCount.three}</p>
      <p>2☆ {ratingsCount.two}</p>
      <p>1☆ {ratingsCount.one}</p>
      <Filters />
      <AverageRatings />
    </div>
  );
}

export default ReviewSnapshot;
