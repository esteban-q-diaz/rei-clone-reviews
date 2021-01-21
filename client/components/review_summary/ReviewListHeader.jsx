import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Form from './Form';
import './ReviewListHeader.css';

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #4A4846;
  position: relative;
  margin: -1px 0 0;
  padding: 1rem .5rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: Stuart,Georgia,serif;
  /* font-size: 2.843rem; */
  line-height: 1.333;
  font-weight: 600;
  letter-spacing: -.16px;
`;

function ReviewListHeader({ submitForm, currentReview }) {
  const [clicked, setClick] = useState(false);

  function manageClick() {
    // e.preventDefault()
    // console.log('clickeed')
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
            <Form
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

ReviewListHeader.propTypes = {
  submitForm: PropTypes.func.isRequired,
  currentReview: PropTypes.instanceOf(Array).isRequired,
};

export default ReviewListHeader;
