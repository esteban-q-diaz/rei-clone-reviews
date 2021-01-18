import React from 'react';

function ThreeFilter( { currentReview, closeFilterClick } ) {
  return (
    <div>
      {/* <p>1-12 of {currentReview.length} Reviews</p>
      <p>Active Filters</p> */}
      <button type="submit" onClick={e=>closeFilterClick(e, 3)}>3 Stars x </button>
      {/* <button type="submit">Clear All x </button> */}
    </div>
  );
}

export default ThreeFilter;
