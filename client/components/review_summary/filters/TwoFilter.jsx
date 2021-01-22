import React from 'react';
import PropTypes from 'prop-types';

function TwoFilter({ closeFilterClick }) {
  return (
    <div>
      <button type="submit" onClick={(e) => closeFilterClick(e, 2)}>2 Stars x </button>
    </div>
  );
}

TwoFilter.defaultProps = {
  closeFilterClick: () => {},
};

TwoFilter.propTypes = {
  closeFilterClick: PropTypes.func,
};

export default TwoFilter;
