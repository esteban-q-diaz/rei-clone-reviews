import React from 'react';
import Filters from './Filters.jsx';
import AverageRatings from './AverageRatings.jsx';
import FiveFilter from './filters/FiveFilter.jsx';
import FourFilter from './filters/FourFilter.jsx';
import ThreeFilter from './filters/ThreeFilter.jsx';
import TwoFilter from './filters/TwoFilter.jsx';
import OneFilter from './filters/OneFilter.jsx';
import ClearFilters from './filters/ClearFilters.jsx';



function ReviewSnapshot( { ratingsCount, sortRatings, averageRatings, currentReview, fiveFilter, fourFilter, threeFilter,  twoFilter, oneFilter, clear, closeFilterClick, filterClick}) {
  return (
    <div>
      <p>
        Rating Snapshot
      </p>
      <p>Select a row below to filter reviews.</p>
      <p onClick={(e) => {sortRatings(e, 5)}}>5☆ {ratingsCount.five}</p>
      <p onClick={(e) => {sortRatings(e, 4)}}>4☆ {ratingsCount.four}</p>
      <p onClick={(e) => {sortRatings(e, 3)}}>3☆ {ratingsCount.three}</p>
      <p onClick={(e) => {sortRatings(e, 2)}}>2☆ {ratingsCount.two}</p>
      <p onClick={(e) => {sortRatings(e, 1)}}>1☆ {ratingsCount.one}</p>
      <p>1-12 of {currentReview.length} Reviews</p>
      <p>Active Filters</p>
      {
          fiveFilter ? (
            <FiveFilter
            currentReview={currentReview}
            closeFilterClick={closeFilterClick}
            />

          )
            : null
        }
        {
          fourFilter ? (
            <FourFilter
            currentReview={currentReview}
            closeFilterClick={closeFilterClick}
            />

          )
            : null
        }
        {
          threeFilter ? (
            <ThreeFilter
            currentReview={currentReview}
            closeFilterClick={closeFilterClick}
            />

          )
            : null
        }
        {
          twoFilter ? (
            <TwoFilter
            currentReview={currentReview}
            closeFilterClick={closeFilterClick}
            />

          )
            : null
        }
        {
          oneFilter ? (
            <OneFilter
            currentReview={currentReview}
            closeFilterClick={closeFilterClick}
            />

          )
            : null
        }
        {
          clear ? (
            <ClearFilters
            currentReview={currentReview}
            closeFilterClick={closeFilterClick}
            />

          )
            : null
        }


      <Filters
        currentReview={currentReview}
        filterClick={filterClick}
      />
      <AverageRatings averageRatings={averageRatings} />
    </div>
  );
}

export default ReviewSnapshot;
