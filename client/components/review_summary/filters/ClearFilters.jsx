import React from 'react';

function ClearFilters( { currentReview, closeFilterClick } ) {
  return (
    <div>
      <button type="submit" onClick={e=>closeFilterClick(e, 'clear')}>Clear All x </button>
    </div>
  );
}

export default ClearFilters;
