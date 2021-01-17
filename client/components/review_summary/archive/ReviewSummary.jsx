import React from 'react';
// eslint-disable-next-line import/extensions
import ReviewListHeader from './ReviewListHeader.jsx';
// eslint-disable-next-line import/extensions
// import Form from './Form.jsx';
// eslint-disable-next-line import/extensions
import ReviewSnapshot from './ReviewSnapshot.jsx';
// eslint-disable-next-line import/extensions
import AverageRatings from './AverageRatings.jsx';
import Form from './Form.jsx'
import axios from 'axios';

class ReviewSummary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoaded: false,
      fullReviews: [],
      currentReview: [],
      ratingsCount: {
        one: 0, two: 0, three: 0, four: 0, five: 0,
      },
      averageRatings: 0,
    };
    this.formClick = this.formClick.bind(this);
    this.sortRatings = this.sortRatings.bind(this);
  }

  componentDidMount() {
    console.log("review summary current", this.props.currentItem);
    this.getAllReviews();
  }

  /* ----- GET ALL REVIEWS -----*/
  // eslint-disable-next-line react/sort-comp
  getAllReviews() {
    axios.get('http://localhost:3000/api/getallreviews')
      .then((res) => {
        this.setState({
          fullReviews: res.data,
        });
        this.getItemReviews();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /* ----- GET REIVEWS FOR ONE ITEM -----*/
  getItemReviews() {
    axios.get(`http://localhost:3000/api/getitemreviews/${this.props.currentItem}`)
      .then((res) => {
        this.setState({
          currentReview: res.data,
        });
        this.countRatings();
      })
      .catch((err) => {
        console.log('error at get item reviews');
      });
  }
  /* ----- FORM CLICK -----*/
  formClick(e) {
    e.preventDefault()
    console.log('form clicked')
  }


  /* ----- GET REIVEWS FOR ONE ITEM -----*/
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

  sortRatings(e, star){
    const {currentReview} = this.state
    e.preventDefault()
    var sortedReviews = [];
    currentReview.map((singleReview)=>{
      singleReview.reviews.map((items) => {
        if(star === 5 && items.stars === 5) {
          sortedReviews.push(singleReview)
        }
        if(star === 4 && items.stars === 4) {
          sortedReviews.push(singleReview)
        }
        if(star === 3 && items.stars === 3) {
          sortedReviews.push(singleReview)
        }
        if(star === 2 && items.stars === 2) {
          sortedReviews.push(singleReview)
        }
        if(star === 1 && items.stars === 1) {
          sortedReviews.push(singleReview)
        }
      })
    })
    this.setState({
      currentReview: sortedReviews
    })
    console.log("sorted", sortedReviews)
  }

  render() {
    const { isLoaded, currentReview, ratingsCount, averageRatings } = this.state;
    return (
      <div>
        <h2> START OF REVIEW SUMMRARY </h2>

        {/* {
          isLoaded ? (
            <Form currentReview={currentReview}/>
          )
            : null
        } */}

        {
          isLoaded ? (
            <ReviewListHeader formClick={this.formClick} currentReview={currentReview}/>
          )
            : null
        }
        {
          isLoaded ? (
            <ReviewSnapshot
              ratingsCount={ratingsCount}
              sortRatings={this.sortRatings}
            />
          )
            : null
        }
        {
          isLoaded
            ? (
              <AverageRatings
                averageRatings={averageRatings}
              />
            )
            : null
      }
      </div>
    );
  }
}

export default ReviewSummary;
