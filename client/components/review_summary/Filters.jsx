import React from 'react';
import './Filters.css';
import PropTypes from 'prop-types';

function Filters({ filterClick }) {
  return (
    <div>
      <div className="container">
        <div className="sortBy">

          <p>Sort by:</p>

        </div>
        <select className="sortSelect" onChange={filterClick}>
          <option name="recent" value="mostRecent">Most Recent</option>
          <option name="relevant" value="mostRelevant">Most Relevant</option>
          <option name="helpful" value="mostHelpful">Most Helpful</option>
          <option name="h2l" value="highToLow">Highest to Lowest Rating</option>
          <option name="l2h" value="lowToHigh">Lowest to Highest Rating</option>
          <option name="recent" value="mostRecent">Most Recent</option>
        </select>
      </div>
    </div>
  );
}

Filters.defaultProps = {
  filterClick: () => {},
};

Filters.propTypes = {
  filterClick: PropTypes.func,
};

export default Filters;
