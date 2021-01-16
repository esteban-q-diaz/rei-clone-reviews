import React from 'react';
import UserDetails from './UserDetails.jsx'
import axios from 'axios'

class ReviewList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoaded: false,
      fullReviews: [],
      currentReview: [],
    };
    this.onHelpfulClick = this.onHelpfulClick.bind(this);
  }

  componentDidMount() {
    console.log("this review list", this.props.currentItem);
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
        })
      })
      .catch((err) => {
        console.log('error at get item reviews');
      });
  }

 /* -----HELPFUL BUTON COUNT-- */
  onHelpfulClick(e, type, reviewId) {
    e.preventDefault();
    console.log('click worked', type, reviewId, this.state);
    console.log(this.props.currentItem);
    if (type === 'yes') {
      axios.put('http://localhost:3000/api/helpful', {reviewId: reviewId})
        .then((res) => {
          console.log('response', res.data);
          this.getItemReviews();
        })
        .catch((err) =>{ console.log(err)
        });
    }
    if (type === 'no') {
      axios.put('http://localhost:3000/api/nothelpful', {reviewId: reviewId})
        .then((res) => {this.getItemReviews()})
        .catch((err) => console.log('error at axios put - no'));
    }
  }


  render() {
    const { currentReview } = this.state;
    return (
      <div>
        <h2> START OF REVIEW LIST </h2>
        <UserDetails
          currentReview={currentReview}
          onHelpfulClick={this.onHelpfulClick}
        />
        {/* <ReviewDetails
          currentReview={currentReview}
          onHelpfulClick={this.onHelpfulClick}
        /> */}
      </div>
    );
  }
}

export default ReviewList;


    // will not need this - just send index
    // console.log("current state for full reviews:", this.state.fullReviews);
    // const { fullReviews, currentReview } = this.state;
    // const currentReviews = [];
    // this.setState({
    //   isLoaded: false,
    // });
    // const innerFunc = (number) => {
    //   // eslint-disable-next-line array-callback-return
    //   fullReviews.map((item) => {
    //     if (item.productId === number) {
    //       currentReviews.push(item);
    //     }
    //   });
    // };
    // innerFunc(this.props.currentItem);
    // this.setState({
    //   isLoaded: true,
    //   currentReview: currentReviews,
    // });

    // console.log('current review in index.js', currentReview);