import React from 'react';
import PropTypes from 'prop-types';
import UserDetailsItems from './UserDetailsItems';

function UserDetails({ currentReview, onHelpfulClick, loadMoreItems }) {
  return (
    <div>
      {currentReview.map((reviews, index) => (
        <UserDetailsItems
          currentReview={reviews}
          onHelpfulClick={onHelpfulClick}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          loadMoreItems={loadMoreItems}
        />
      ))}
      <div className="load-more-container">
        <button className="load-more" type="submit" onClick={loadMoreItems}>Load more</button>
      </div>
    </div>
  );
}

UserDetails.defaultProps = {
  loadMoreItems: () => {},
  onHelpfulClick: () => {},
  currentReview: [],
};

UserDetails.propTypes = {
  loadMoreItems: PropTypes.func,
  onHelpfulClick: PropTypes.func,
  currentReview: PropTypes.instanceOf(Array),
};

export default UserDetails;
