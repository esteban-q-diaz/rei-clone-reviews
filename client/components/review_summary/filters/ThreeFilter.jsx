import React from 'react';
import PropTypes from 'prop-types';
import { IoIosCloseCircle } from "../../../../node_modules/react-icons/io";

function ThreeFilter({ closeFilterClick }) {
  return (
    <div>
      <button className="filter-button" type="submit" onClick={(e) => closeFilterClick(e, 3)}>
        {'3 Stars '}
        <IoIosCloseCircle />
      </button>
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
