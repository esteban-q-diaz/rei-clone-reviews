import React from 'react';
import UserDetailsItems from './UserDetailsItems.jsx';

function UserDetails ( { currentReview }) {
  return (
    <div>
      {currentReview.map((reviews, index)=>{
        return <UserDetailsItems currentReview={reviews} key={index}/>
      })}
    </div>
  )
}

export default UserDetails