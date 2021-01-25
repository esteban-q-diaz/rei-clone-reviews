import React from 'react';
import './ModalStyle.css';
import Form from './Form.jsx'

function Modal({currentReview, closeForm, submitForm}) {

  return (
    <div className="modal">

      <div className="modal-content">
      <Form currentReview={currentReview}
closeForm={closeForm}
submitForm={submitForm}/>


      </div>
    </div>
  );
}

export default Modal;
