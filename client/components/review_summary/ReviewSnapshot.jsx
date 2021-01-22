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
import { GrStar } from 'react-icons/gr';

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
            <p className="selectRow">Select a row below to filter reviews.</p>
          </div>
          <div className="starsContainer">
            <div className="fiveFilterr" onClick={(e) => { sortRatings(e, 5); }}>
              5 <GrStar />
              {/* {ratingsCount.five} */}
            </div>
            <div className="fiveContainer">
              <div className="fiveBar"></div>
            </div>
            <div onClick={(e) => { sortRatings(e, 4); }}>
              4 <GrStar />
              {/* {ratingsCount.four} */}
            </div>
            <div className="fiveContainer">
              <div className="fiveBar"></div>
            </div>
            <div onClick={(e) => { sortRatings(e, 3); }}>
              3 <GrStar />
              {/* {ratingsCount.three} */}
            </div>
            <div className="fiveContainer">
              <div className="fiveBar"></div>
            </div>
            <div onClick={(e) => { sortRatings(e, 2); }}>
              2 <GrStar />
              {/* {ratingsCount.two} */}
            </div>
            <div className="fiveContainer">
              <div className="fiveBar"></div>
            </div>
            <div onClick={(e) => { sortRatings(e, 1); }}>
              1 <GrStar />
              {/* {ratingsCount.one} */}
            </div>
            <div className="fiveContainer">
              <div className="fiveBar"></div>
            </div>

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
            1 -
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

ReviewSnapshot.defaultProps = {
  averageRatings: 0,
  sortRatings: () => {},
  closeFilterClick: () => {},
  filterClick: () => {},
  fiveFilter: false,
  fourFilter: false,
  threeFilter: false,
  twoFilter: false,
  oneFilter: false,
  clear: false,
};

ReviewSnapshot.propTypes = {
  ratingsCount: PropTypes.instanceOf(Object).isRequired,
  currentReview: PropTypes.instanceOf(Array).isRequired,
  averageRatings: PropTypes.number,
  sortRatings: PropTypes.func,
  closeFilterClick: PropTypes.func,
  filterClick: PropTypes.func,
  fiveFilter: PropTypes.bool,
  fourFilter: PropTypes.bool,
  threeFilter: PropTypes.bool,
  twoFilter: PropTypes.bool,
  oneFilter: PropTypes.bool,
  clear: PropTypes.bool,
};

export default ReviewSnapshot;
