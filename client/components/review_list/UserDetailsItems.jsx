import React from 'react';
import PropTypes from 'prop-types';
import './UserDetails.css';
import { GrStar } from 'react-icons/gr';

function UserDetailsItems({ currentReview, onHelpfulClick, loadMoreItems }) {
  return (
    <div className="userContainer">
      <h2>
        {currentReview.reviews[0].name}
        in
      </h2>
      <p>
        {`${currentReview.reviews[0].city},
        ${currentReview.reviews[0].state}`}
      </p>
      <p>
        Review
        {currentReview.reviews[0].review_total}
      </p>
    < div className="detailsContainer">
      <h2> REVIEW DETAILS STARTS HERE</h2>
      <h2><GrStar size={20} color='#BE7B2C'/> <GrStar size={20} color='#BE7B2C'/> <GrStar size={20} color='#BE7B2C'/> <GrStar size={20} color='#BE7B2C'/> <GrStar size={20} color='#BE7B2C'/></h2>
      <h3>
        {`${currentReview.reviews[0].stars} `}
        Stars
      </h3>
      <p>
        {currentReview.reviews[0].date}
      </p>
      <h2>
        {currentReview.reviews[0].title}
      </h2>
      <p>
        {currentReview.reviews[0].description}
      </p>
      {/* <h2>Yoga Experience</h2> */}
      <p>Beginner</p>
      <h2>Age:</h2>
      <p>
        {currentReview.reviews[0].age}
      </p>
      <h2>
        {currentReview.reviews[0].recommended ? 'Yes,' : 'No,'}
      </h2>
      <p>
        {currentReview.reviews[0].recommended ? 'I recommend this product.' : 'I do not recommend this product.'}
      </p>
      <p>Helpful?</p>
      <button type="submit" onClick={(e) => { onHelpfulClick(e, 'yes', currentReview.reviewId); }}>
        Yes -
        {currentReview.helpful_count}
      </button>
      <button type="submit" onClick={(e) => { onHelpfulClick(e, 'no', currentReview.reviewId); }}>
        No -
        {currentReview.not_helpful_count}
      </button>
      <button type="submit">Report as inappropriate</button>

      {/* <button type="submit" onClick={loadMoreItems}>Load More</button> */}
      {/* <ReviewDetails currentReview={currentReview} onHelpfulClick={onHelpfulClick} /> */}
      </div>
    </div>
  );
}

UserDetailsItems.defaultProps = {
  onHelpfulClick: () => {},
  loadMoreItems: () => {},
};

UserDetailsItems.propTypes = {
  onHelpfulClick: PropTypes.func,
  loadMoreItems: PropTypes.func,
  currentReview: PropTypes.instanceOf(Object).isRequired,
};

export default UserDetailsItems;
