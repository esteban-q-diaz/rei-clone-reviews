import React, { useState } from 'react';
import axios from 'axios';

function ReviewDetailsItems({ currentReview, getAllReviews }) {

  const [yesCount, setYesCount] = useState(0);
  function addYesCount() {
    axios.post('http://localhost:3000/api/helpfulbutton', {reviewId: currentReview.reviewId, help: currentReview.helpful_count})
      .then(res=> getAllReviews())
      .catch(err=> console.log('err'))
  }

  const [noCount, setNoCount] = useState(0);
  function addNoCount() {

  }

  return (
    <div>
      {console.log("revew:", currentReview)}
      <h2>☆ ☆ ☆ ☆ ☆ </h2>
      <h3>{currentReview.reviews[0].stars} stars</h3>
      <p>{currentReview.reviews[0].date}</p>
      <p>11 days ago</p>
      <h2>{currentReview.reviews[0].title}</h2>
      <p>{currentReview.reviews[0].description}.</p>
      {/* <h2>Yoga Experience</h2> */}
      <p>Beginner</p>
      <h2>Age</h2>
      <p>55-54</p>
      <h2>{currentReview.reviews[0].recommended ?`Yes,` : `No,`}</h2>
      <p>{currentReview.reviews[0].recommended ?`I recommend this product.` : `I do not recommend this product.`}</p>
      <p>Helpful?</p>
      <button onClick={addYesCount}>Yes - {currentReview.helpful_count}</button>
      <button>No - {currentReview.not_helpful_count}</button>
      <button>Report as inappropriate</button>
    </div>
  );
}

export default ReviewDetailsItems

// import React from 'react';

// function ReviewDetailsItems({ currentReview }) {
//   return (
//     <div>
//       {console.log("revew:", currentReview)}
//       <h2>☆ ☆ ☆ ☆ ☆ </h2>
//       <p>11 days ago</p>
//       <h2>The go-to block.</h2>
//       <p>The yoga block is sturdy, yet light.
//         asy to grasp. Does not slip on the floor. Aesthetically pleasing. I use it to help with stretches. The block is solid and stable on any of the three axis/orientations which you could say make it work as if it was three.</p>
//       <h2>Yoga Experience</h2>
//       <p>Beginner</p>
//       <h2>Age</h2>
//       <p>55-54</p>
//       <h2>Yes,</h2>
//       <p>I recommend this product.</p>
//       <p>Helpful?</p>
//       <p>Yes - 3</p>
//       <p>No - 0</p>
//       <p>Reported</p>
//       })}
//     </div>
//   );
// }

// export default ReviewDetailsItems