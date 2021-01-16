import React from 'react';
import UserDetails from './UserDetails.jsx'
import ReviewDetails from './ReviewDetails.jsx';
import axios from 'axios'

class ReviewList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      fullReviews: props.fullReviews,
      currentReview: props.currentReview
    };
  }

  componentDidMount() {
    console.log("this", this.state.currentReview);
  }



  render() {
    const { currentReview } = this.state;
    const { getAllReviews, onHelpfulClick } = this.props;
    return (
      <div>
        <h2> START OF REVIEW LIST </h2>
        <UserDetails
          currentReview={currentReview}
        />
        <ReviewDetails
          currentReview={currentReview}
          getAllReviews={getAllReviews}
          onHelpfulClick={onHelpfulClick}
        />
      </div>
    );
  }
}

export default ReviewList;
