import React from 'react';
import UserDetails from './UserDetails.jsx'
import ReviewDetails from './ReviewDetails.jsx';

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
    const { currentReview } = this.state;
    return (
      <div>
        <h2> START OF REVIEW LIST </h2>
        <UserDetails
          currentReview={currentReview}
        />
        <ReviewDetails
          currentReview={currentReview}
          getAllReviews={this.props.getAllReviews}
        />
      </div>
    );
  }
}

export default ReviewList;
