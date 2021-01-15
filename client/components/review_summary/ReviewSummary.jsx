import React from 'react';
import ReviewListHeader from './ReviewListHeader.jsx';
import ReviewButton from './ReviewButton.jsx';
import Form from './Form.jsx';
import ReviewSnapshot from './ReviewSnapshot.jsx';

class ReviewSummary extends React.Component {
  constructor() {
    super();
    this.state = {
    };
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
