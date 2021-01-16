import React from 'react';
import UserDetailsItems from './UserDetailsItems.jsx';

function UserDetails ( { currentReview, onHelpfulClick }) {
  return (
    <div>
      {console.log("CRrrrrr:", currentReview)}
      {currentReview.map((reviews, index) => {
        return <UserDetailsItems currentReview={reviews} onHelpfulClick={onHelpfulClick} key={index}/>
      })}
    </div>
  )
}

export default UserDetails