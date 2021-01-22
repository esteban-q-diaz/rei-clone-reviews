import React from 'react';
import PropTypes from 'prop-types';

function FourFilter({ closeFilterClick }) {
  return (
    <div>
      <button type="submit" onClick={(e) => closeFilterClick(e, 4)}>4 Stars x </button>
    </div>
  );
}

FourFilter.defaultProps = {
  closeFilterClick: () => {},
};

FourFilter.propTypes = {
  closeFilterClick: PropTypes.func,
};

export default FourFilter;
