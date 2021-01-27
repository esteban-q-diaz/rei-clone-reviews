import React from 'react';
import PropTypes from 'prop-types';
import { IoIosCloseCircle } from "react-icons/io";

function TwoFilter({ closeFilterClick }) {
  return (
    <div className="exit-button">
      <button className="filter-button" type="submit" onClick={(e) => closeFilterClick(e, 2)}>
        {'2 Stars '}
        <IoIosCloseCircle />
      </button>
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
