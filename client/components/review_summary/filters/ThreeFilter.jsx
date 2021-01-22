import React from 'react';
import PropTypes from 'prop-types';

function ThreeFilter({ closeFilterClick }) {
  return (
    <div>
      <button type="submit" onClick={(e) => closeFilterClick(e, 3)}>3 Stars x </button>
    </div>
  );
}

ThreeFilter.defaultProps = {
  closeFilterClick: () => {},
};

ThreeFilter.propTypes = {
  closeFilterClick: PropTypes.func,
};

export default ThreeFilter;
