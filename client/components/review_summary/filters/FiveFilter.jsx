import React from 'react';
import PropTypes from 'prop-types';
import './filterbutton.css';
import { IoIosCloseCircle } from "react-icons/io";

function FiveFilter({ closeFilterClick }) {
  return (
    <div>
      <button className="filter-button" type="submit" onClick={(e) => closeFilterClick(e, 5)}>
        {'5 Stars '}
        <IoIosCloseCircle />
      </button>
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
