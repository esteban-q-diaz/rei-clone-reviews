import React from 'react';
import PropTypes from 'prop-types';

function ClearFilters({ closeFilterClick }) {
  return (
    <div>
      <button type="submit" onClick={(e) => closeFilterClick(e, 'clear')}>Clear All x </button>
    </div>
  );
}

ClearFilters.defaultProps = {
  closeFilterClick: () => {},
};

ClearFilters.propTypes = {
  closeFilterClick: PropTypes.func,
};

export default ClearFilters;
