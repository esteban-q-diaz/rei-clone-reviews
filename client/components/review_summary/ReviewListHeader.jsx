import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from './Modal';
import './ReviewListHeader.css';
import './ModalStyle.css';

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #4A4846;
  position: relative;
  margin: -1px 0 0;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: Stuart,Georgia,serif;
  line-height: 1.333;
  font-weight: 600;
  letter-spacing: -.16px;
`;

function ReviewListHeader({ submitForm, currentReview }) {
  const [clicked, setClick] = useState(false);

  function manageClick() {
    setClick(prevState => prevState = true);
  }

  function closeForm(e) {
    e.preventDefault();
    setClick((prevState) => {
      prevState = false;
    });
  }

  return (
    <div>
      <Header>
        <h2>Reviews</h2>
      </Header>
      <div className="buttonDiv">
        <button type="submit" className="button" onClick={manageClick}>
          Write A Review
        </button>
      </div>
      {
        clicked ? (
          <Modal
            currentReview={currentReview}
            closeForm={closeForm}
            submitForm={submitForm}
          />
        )
          : null
        }
    </div>
  );
}

ReviewListHeader.defaultProps = {
  submitForm: () => {},
  currentReview: [],
};

ReviewListHeader.propTypes = {
  submitForm: PropTypes.func,
  currentReview: PropTypes.instanceOf(Array),
};

export default ReviewListHeader;
