import React from 'react';
import ReviewDetailsItems from './ReviewDetailsItems.jsx'

function ReviewDetails({ currentReview, getAllReviews }) {
  return (
    <div>
      {currentReview.map((reviews, index)=>{
        return <ReviewDetailsItems currentReview={reviews} key={index} getAllReviews={getAllReviews}/>
      })}
    </div>
  );
}

export default ReviewDetails