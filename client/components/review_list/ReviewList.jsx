import React from 'react';
import UserDetails from './UserDetails.jsx'
import ReviewDetails from './ReviewDetails.jsx'

class ReviewList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      fullReviews: props.fullReviews,
      currentReview: props.currentReview
    };
  }

  componentDidMount() {
    console.log("this", this.props.currentReview);
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
