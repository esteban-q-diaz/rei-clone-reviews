import React from 'react';
import PropTypes from 'prop-types';
import { GrStar } from 'react-icons/gr';
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
import './fivefilters.css';


function ReviewSnapshot({
  ratingsCount, sortRatings, averageRatings,
  currentReview, fiveFilter, fourFilter,
  threeFilter, twoFilter, oneFilter,
  clear, closeFilterClick, filterClick, currentReviewCount,
}) {
  const five = ratingsCount.five;
  const four = ratingsCount.four;
  const three = ratingsCount.three;
  const two = ratingsCount.two;
  const one = ratingsCount.one;

  const total = five + four + three + two + one

  const fivePercentage = Math.trunc((five / total) * 100);
  const fourPercentage = Math.trunc((four / total) * 100);
  const threePercentage = Math.trunc((three / total) * 100);
  const twoPercentage = Math.trunc((two / total) * 100);
  const onePercentage = Math.trunc((one / total) * 100);

  return (
    <div>
      <div className="main">

        <div className="flexoutter">
          <div className="snapshot-star-filters">
            <div className="flexsnapshot">

              <div className="rating-snapshot">
                <p className="ratingSnapshot">
                  Rating Snapshot
                </p>
                <p className="selectRow">Select a row below to filter reviews.</p>
              </div>

              <div className="starsContainer">
                <div
                  role="button"
                  tabIndex={0}
                  className="fiveFilterr"
                  onClick={(e) => { sortRatings(e, 5); }}
                >
                  5
                  <GrStar />
                  {ratingsCount.five}
                </div>
                <div className="fiveContainer">
                  <div className="fiveBar" style={{ width: `${fivePercentage}%` }} />
                </div>

                <div
                  role="button"
                  tabIndex={0}
                  className="fiveFilterr"
                  onClick={(e) => { sortRatings(e, 4); }}
                >
                  4
                  <GrStar />
                  {ratingsCount.four}
                </div>
                <div className="fiveContainer">
                  <div className="fiveBar" style={{ width: `${fourPercentage}%` }} />
                </div>

                <div
                  role="button"
                  tabIndex={0}
                  className="fiveFilterr"
                  onClick={(e) => { sortRatings(e, 3); }}
                >
                  3
                  <GrStar />
                  {ratingsCount.three}
                </div>
                <div className="fiveContainer">
                  <div className="fiveBar" style={{ width: `${threePercentage}%` }} />
                </div>

                <div
                  role="button"
                  tabIndex={0}
                  className="fiveFilterr"
                  onClick={(e) => { sortRatings(e, 2); }}
                >
                  2
                  <GrStar />
                  {ratingsCount.two}
                </div>
                <div className="fiveContainer">
                  <div className="fiveBar" style={{ width: `${twoPercentage}%` }} />
                </div>

                <div
                  role="button"
                  tabIndex={0}
                  className="fiveFilterr"
                  onClick={(e) => { sortRatings(e, 1); }}
                >
                  1
                  <GrStar />
                  {ratingsCount.one}
                </div>
                <div className="fiveContainer">
                  <div className="fiveBar" style={{ width: `${onePercentage}%` }} />
                </div>
              </div>
            </div>
          </div>

          <div className="averageRatings">
            <AverageRatings
              averageRatings={averageRatings}
            />
          </div>
        </div>

      </div>

      <div className="filter-container">

        <div className="filter">
          <p>
            {'1 - '}
            {`${currentReview.length} `}
            {'of '}
            {`${currentReviewCount} `}
            {'Reviews '}
          </p>
          {/* The text below should only appear is the filters are activaters */}
          {/* <p>Active Filters</p> */}
        </div>

        <div className="sort">
          <Filters
            currentReview={currentReview}
            filterClick={filterClick}
          />
        </div>
      </div>
      <div className="flexfilter">
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
            twoFilter ? (
              <TwoFilter
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
            fourFilter ? (
              <FourFilter
                currentReview={currentReview}
                closeFilterClick={closeFilterClick}
              />

            )
              : null
          }
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
            clear ? (
              <ClearFilters
                currentReview={currentReview}
                closeFilterClick={closeFilterClick}
              />

            )
              : null
          }
      </div>
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
