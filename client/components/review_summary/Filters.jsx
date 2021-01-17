import React from 'react';

function Filters() {
  return (
    <div>
      <p>Active Filters</p>
      <button type="submit">5 Stars x </button>
      <button type="submit">Clear All x </button>
      <p>Sort by:</p>
      <select>
        <option>Most Recent</option>
        <option>Most Relevant</option>
        <option>Highest to Lowest Rating</option>
        <option>Lowest to Highest Rating</option>
        <option>Most Recent</option>
      </select>
    </div>
  );
}

export default Filters;
