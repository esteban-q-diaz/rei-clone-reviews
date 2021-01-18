import React from 'react';

function Filters( { currentReview, filterClick } ) {
  return (
    <div>
      {/* <p>1-12 of {currentReview.length} Reviews</p>
      <p>Active Filters</p> */}
      {/* <button type="submit">5 Stars x </button>
      <button type="submit">Clear All x </button> */}
      <p>Sort by:</p>
      <select onChange={filterClick}>
        <option name='recent' value='mostRecent'>Most Recent</option>
        <option name='relevant' value='mostRelevant'>Most Relevant</option>
        <option name='helpful' value='mostHelpful'>Most Helpful</option>
        <option name='h2l' value='highToLow'>Highest to Lowest Rating</option>
        <option name='l2h' value='lowToHigh'>Lowest to Highest Rating</option>
        <option name='recent' value='mostRecent'>Most Recent</option>
      </select>
    </div>
  );
}

export default Filters;
