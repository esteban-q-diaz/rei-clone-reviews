import React from 'react';

function UserDetailsItems({ currentReview }) {
  return (
    <div>
      <h2>{currentReview.reviews[0].name} in  </h2>
      <p>{`${currentReview.reviews[0].city}, ${currentReview.reviews[0].state}`}</p>
      <p>Review {currentReview.reviews[0].review_total}</p>
    </div>
  )
}

export default UserDetailsItems