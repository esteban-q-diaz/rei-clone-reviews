import React from 'react';
import Filters from './Filters.jsx';
import AverageRatings from './AverageRatings.jsx';

function ReviewSnapshot() {
  return (
    <div>
      <p>Rating Snapshot</p>
      <p>Select a row below to filter reviews.</p>
      <p>5☆ 2</p>
      <p>4☆ 0</p>
      <p>3☆ 0</p>
      <p>2☆ 0</p>
      <p>1☆ 0</p>
      <Filters />
      <AverageRatings />
    </div>
  );
}

export default ReviewSnapshot;
