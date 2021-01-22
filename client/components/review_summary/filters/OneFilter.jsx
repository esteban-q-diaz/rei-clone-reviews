import React from 'react';
import PropTypes from 'prop-types';

function OneFilter({ closeFilterClick }) {
  return (
    <div>
      <button type="submit" onClick={(e) => closeFilterClick(e, 1)}>1 Stars x </button>
    </div>
  );
}

OneFilter.defaultProps = {
  closeFilterClick: () => {},
};

OneFilter.propTypes = {
  closeFilterClick: PropTypes.func,
};

export default OneFilter;
