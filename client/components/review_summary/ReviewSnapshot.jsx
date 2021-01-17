import React from 'react';
import Filters from './Filters.jsx';
import AverageRatings from './AverageRatings.jsx';

function ReviewSnapshot( { ratingsCount, sortRatings }) {
  return (
    <div>
      <p>Rating Snapshot{"ratings count:", console.log(ratingsCount)}</p>
      <p>Select a row below to filter reviews.</p>
      <p onClick={(e) => {sortRatings(e, 5)}}>5☆ {ratingsCount.five}</p>
      <p onClick={(e) => {sortRatings(e, 4)}}>4☆ {ratingsCount.four}</p>
      <p onClick={(e) => {sortRatings(e, 3)}}>3☆ {ratingsCount.three}</p>
      <p onClick={(e) => {sortRatings(e, 2)}}>2☆ {ratingsCount.two}</p>
      <p onClick={(e) => {sortRatings(e, 1)}}>1☆ {ratingsCount.one}</p>
      <Filters />
      <AverageRatings />
    </div>
  );
}

export default ReviewSnapshot;
