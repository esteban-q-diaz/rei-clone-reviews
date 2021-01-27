import React from 'react';
import PropTypes from 'prop-types';
import './ModalStyle.css';
import Form from './Form.jsx'

function Modal({ currentReview, closeForm, submitForm }) {
  // state if modal is present change whole body section to black screen with lower opacity
  return (
    <div className="modal">
      <div className="modal-content">
        <Form
          currentReview={currentReview}
          closeForm={closeForm}
          submitForm={submitForm}
        />
      </div>
    </div>
  );
}

Modal.defaultProps = {
  submitForm: () => {},
  closeForm: () => {},
  currentReview: [],
};

Modal.propTypes = {
  submitForm: PropTypes.func,
  closeForm: PropTypes.func,
  currentReview: PropTypes.instanceOf(Array),
};

export default Modal;
