import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions
import Filters from './Filters.jsx';
import AverageRatings from './AverageRatings';
import FiveFilter from './filters/FiveFilter';
import FourFilter from './filters/FourFilter';
import ThreeFilter from './filters/ThreeFilter';
import TwoFilter from './filters/TwoFilter';
import OneFilter from './filters/OneFilter';
import ClearFilters from './filters/ClearFilters';
import './ReviewSnapshot.css';

const FullDiv = styled.div`
  display: flex;
`;

const Snapshot = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  position: relative;
  margin: -1px 0 0;
  padding: 1rem .5rem;
  line-height: 1.333;
  font-weight: 600;
  letter-spacing: -.16px;
  color: #292929!important;
  font-size: 16px!important;
  font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif!important;
  font-style: normal!important;
  font-weight: 400!important;
  font-variant: normal!important;
  text-decoration: none!important;
  text-transform: none!important;
  /* border-right: solid; */
`;

const Average = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 3;
  position: relative;
  margin: -1px 0 0;
  padding: 1rem .5rem;
  line-height: 1.333;
  font-weight: 600;
  letter-spacing: -.16px;
  color: #292929!important;
  font-size: 16px!important;
  font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif!important;
  font-style: normal!important;
  font-weight: 400!important;
  font-variant: normal!important;
  text-decoration: none!important;
  text-transform: none!important;
`;

function ReviewSnapshot({
  ratingsCount, sortRatings, averageRatings,
  currentReview, fiveFilter, fourFilter,
  threeFilter, twoFilter, oneFilter,
  clear, closeFilterClick, filterClick,
}) {
  return (

    <div>
      <FullDiv>
        <Snapshot>
          <div className="header">
            <p className="ratingSnapshot">
              Rating Snapshot
            </p>
            <p>Select a row below to filter reviews.</p>
          </div>
          <div className='stars'>
            <p className="fiveFilter" onClick={(e) => {sortRatings(e, 5)}}>5☆ {ratingsCount.five}</p>

            <p onClick={(e) => {sortRatings(e, 4)}}>4☆ {ratingsCount.four}</p>
            <p onClick={(e) => {sortRatings(e, 3)}}>3☆ {ratingsCount.three}</p>
            <p onClick={(e) => {sortRatings(e, 2)}}>2☆ {ratingsCount.two}</p>
            <p onClick={(e) => {sortRatings(e, 1)}}>1☆ {ratingsCount.one}</p>

          </div>

        </Snapshot>

        <Average>

          <AverageRatings
            averageRatings={averageRatings}
          />
        </Average>
      </FullDiv>

      <div className="container">

        <div className="filter">
          <p>
            1-
            {currentReview.length}
            of
            {currentReview.length}
            Reviews
          </p>
          <p>Active Filters</p>
        </div>

        <div className="sort">
          <Filters
            currentReview={currentReview}
            filterClick={filterClick}
          />
        </div>
      </div>
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

    </div>
  );
}

ReviewSnapshot.propTypes = {
  ratingsCount: PropTypes.instanceOf(Object).isRequired,
  currentReview: PropTypes.instanceOf(Array).isRequired,
  averageRatings: PropTypes.number.isRequired,
  sortRatings: PropTypes.func.isRequired,
  closeFilterClick: PropTypes.func.isRequired,
  filterClick: PropTypes.func.isRequired,
  fiveFilter: PropTypes.bool.isRequired,
  fourFilter: PropTypes.bool.isRequired,
  threeFilter: PropTypes.bool.isRequired,
  twoFilter: PropTypes.bool.isRequired,
  oneFilter: PropTypes.bool.isRequired,
  clear: PropTypes.bool.isRequired,

};

export default ReviewSnapshot;
