import React from 'react';
import PropTypes from 'prop-types';
import { IoIosCloseCircle } from "../../../../node_modules/react-icons/io";

function FourFilter({ closeFilterClick }) {
  return (
    <div>
      <button className="filter-button" type="submit" onClick={(e) => closeFilterClick(e, 4)}>
        {'4 Stars '}
        <IoIosCloseCircle />
      </button>
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
