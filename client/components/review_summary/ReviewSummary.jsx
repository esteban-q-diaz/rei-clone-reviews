import React from 'react';
import ReviewListHeader from './ReviewListHeader.jsx';
import ReviewButton from './ReviewButton.jsx';
import Form from './Form.jsx';
import ReviewSnapshot from './ReviewSnapshot.jsx';

class ReviewSummary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      fullReviews: props.fullReviews,
    };
  }

  componentDidMount() {
    console.log(this.props.fullReviews);
  }

  render() {
    return (
      <div>
        <ReviewListHeader />
        <ReviewButton />
        <Form />
        <ReviewSnapshot />
      </div>
    );
  }
}

export default ReviewSummary;
