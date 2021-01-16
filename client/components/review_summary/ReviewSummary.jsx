import React from 'react';
// eslint-disable-next-line import/extensions
import ReviewListHeader from './ReviewListHeader.jsx';
// eslint-disable-next-line import/extensions
import ReviewButton from './ReviewButton.jsx';
// eslint-disable-next-line import/extensions
import Form from './Form.jsx';
// eslint-disable-next-line import/extensions
import ReviewSnapshot from './ReviewSnapshot.jsx';
// eslint-disable-next-line import/extensions
import AverageRatings from './AverageRatings.jsx';

class ReviewSummary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoaded: false,
      fullReviews: props.fullReviews,
      currentReview: props.currentReview,
      ratingsCount: {
        one: 0, two: 0, three: 0, four: 0, five: 0,
      },
      averageRatings: 0,
    };
  }

  componentDidMount() {
    const { currentReview } = this.props;
    console.log('"this"', currentReview);
    this.countRatings();
  }

  countRatings() {
    const { currentReview, ratingsCount } = this.state;
    let occur = 0;
    currentReview.map((items) => {
      items.reviews.map((reviews) => {
        if (reviews.stars === 1) {
          ratingsCount.one += 1;
          occur += 1;
        }
        if (reviews.stars === 2) {
          ratingsCount.two += 1;
          occur += 1;
        }
        if (reviews.stars === 3) {
          ratingsCount.three += 1;
          occur += 1;
        }
        if (reviews.stars === 4) {
          ratingsCount.four += 1;
          occur += 1;
        }
        if (reviews.stars === 5) {
          ratingsCount.five += 1;
          occur += 1;
        }
      });
    });
    const a = ratingsCount;
    const total = 1 * Number(a.one)
    + 2 * Number(a.two) + 3 * Number(a.three) + 4 * Number(a.four) + 5 * Number(a.five);

    const average = total / occur;

    this.setState({
      averageRatings: Math.round(average * 10) / 10,
      isLoaded: true,
    });
  }

  render() {
    const { isLoaded, currentReview, ratingsCount } = this.state;
    return (
      <div>
        {/* <Form currentReview={currentReview}/> */}
        <ReviewListHeader />
        <ReviewButton />
        {
          isLoaded ?
            <ReviewSnapshot
              ratingsCount={ratingsCount}
            />
        : null
      }
      {
          isLoaded ?
            <AverageRatings
            averageRatings={this.state.averageRatings}
            />
        : null
      }
      </div>
    );
  }
}

export default ReviewSummary;
