import React from 'react';
import PropTypes from 'prop-types';

function FiveFilter({ closeFilterClick }) {
  return (
    <div>
      <button type="submit" onClick={(e) => closeFilterClick(e, 5)}>5 Stars x </button>
    </div>
  );
}

FiveFilter.defaultProps = {
  closeFilterClick: () => {},
};

FiveFilter.propTypes = {
  closeFilterClick: PropTypes.func,
};

export default FiveFilter;
