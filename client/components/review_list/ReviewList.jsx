import React from 'react';
import UserDetails from './UserDetails.jsx'
import ReviewDetails from './ReviewDetails.jsx'

class ReviewList extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <UserDetails />
        <ReviewDetails />
      </div>
    );
  }
}

export default ReviewList;
