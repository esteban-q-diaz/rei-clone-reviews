import React from 'react';
import PropTypes from 'prop-types';
import { IoIosCloseCircle } from "react-icons/io";

function OneFilter({ closeFilterClick }) {
  return (
    <div>
      <button className="filter-button" type="submit" onClick={(e) => closeFilterClick(e, 2)}>
        {'1 Stars '}
        <IoIosCloseCircle />
      </button>
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
