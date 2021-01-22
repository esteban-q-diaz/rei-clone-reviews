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
      <button type="submit" onClick={loadMoreItems}>Load More</button>
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
