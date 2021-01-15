import React from 'react';
import UserDetails from './UserDetails.jsx'
import ReviewDetails from './ReviewDetails.jsx'

class ReviewList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      fullReviews: props.fullReviews,
    };
  }

  componentDidMount() {
    console.log(this.props.fullReviews)
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
