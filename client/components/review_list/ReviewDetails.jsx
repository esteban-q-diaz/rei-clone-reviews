import React from 'react';
import ReviewDetailsItems from './ReviewDetailsItems.jsx'

function ReviewDetails({ currentReview, getAllReviews, onHelpfulClick }) {
  return (
    <div>
      {currentReview.map((reviews, index) => (
        <ReviewDetailsItems
          currentReview={reviews}
          key={index}
          getAllReviews={getAllReviews}
          onHelpfulClick={onHelpfulClick}
        />
      ))}
    </div>
  );
}

export default ReviewDetails;
