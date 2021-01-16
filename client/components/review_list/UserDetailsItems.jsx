import React from 'react';

function UserDetailsItems({ currentReview, onHelpfulClick }) {
  return (
    <div>
      {console.log("current", currentReview)}
      <h2>{currentReview.reviews[0].name} in  </h2>
      <p>{`${currentReview.reviews[0].city}, ${currentReview.reviews[0].state}`}</p>
      <p>Review {currentReview.reviews[0].review_total}</p>

      <h2> REVIEW DETAILS STARTS HERE</h2>
      <h2>☆ ☆ ☆ ☆ ☆ </h2>
      <h3>
        {/* eslint-disable-next-line react/prop-types */}
        {currentReview.reviews[0].stars}
        stars
      </h3>
      <p>{currentReview.reviews[0].date}</p>
      <p>11 days ago</p>
      <h2>{currentReview.reviews[0].title}</h2>
      <p>{currentReview.reviews[0].description}.</p>
      {/* <h2>Yoga Experience</h2> */}
      <p>Beginner</p>
      <h2>Age</h2>
      <p>55-54</p>
      <h2>{currentReview.reviews[0].recommended ? 'Yes,' : 'No,'}</h2>
      <p>{currentReview.reviews[0].recommended ? 'I recommend this product.' : 'I do not recommend this product.'}</p>
      <p>Helpful?</p>
      <button type="submit" onClick={(e) => { onHelpfulClick(e, 'yes', currentReview.reviewId); }}>
        Yes - {currentReview.helpful_count}
      </button>
      <button type="submit" onClick={(e) => { onHelpfulClick(e, 'no', currentReview.reviewId); }}>
        No - {currentReview.not_helpful_count}
      </button>
      <button>Report as inappropriate</button>


      {/* <ReviewDetails currentReview={currentReview} onHelpfulClick={onHelpfulClick} /> */}
    </div>

  )
}

export default UserDetailsItems