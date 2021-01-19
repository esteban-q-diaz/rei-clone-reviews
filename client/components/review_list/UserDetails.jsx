import React from 'react';
import UserDetailsItems from './UserDetailsItems.jsx';

function UserDetails ( { currentReview, onHelpfulClick, loadMoreItems }) {
  return (
    <div>
      {currentReview.map((reviews, index) => {
        return <UserDetailsItems currentReview={reviews} onHelpfulClick={onHelpfulClick} key={index} loadMoreItems={loadMoreItems}/>
      })}
    </div>
  )
}

export default UserDetails