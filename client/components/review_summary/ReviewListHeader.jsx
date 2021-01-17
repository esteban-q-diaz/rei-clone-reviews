import React, {useState} from 'react';
import Form from './Form.jsx';

function ReviewListHeader({formClick, currentReview}) {
  const [clicked, setClick] = useState(false);

  console.log('current from header', currentReview)

  function manageClick(e) {
    e.preventDefault()
    console.log('clickeed')
    setClick(prevState => prevState = true)
  }

  function closeForm(e) {
    e.preventDefault()
    console.log('clickeed')
    setClick(prevState => prevState = false)
  }

  return (
    <div>
      <h2>Reviews</h2>
      <button type="submit" onClick={manageClick}> Write A Review </button>

      {
          clicked ? (
            <Form currentReview={currentReview}
            closeForm={closeForm}
            />
          )
            : null
        }
    </div>
  );
}

export default ReviewListHeader