import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewListHeader from '../components/review_summary/ReviewListHeader.jsx';
import AverageRatings from '../components/review_summary/AverageRatings.jsx';
import UserDetails from '../components/review_list/UserDetails.jsx';
import ReviewSnapshot from '../components/review_summary/ReviewSnapshot.jsx';
// import Form from './Form.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      count: false,
      fullReviews: [],
      currentReview: [],
      ratingsCount: {
        one: 0, two: 0, three: 0, four: 0, five: 0,
      },
      averageRatings: 0,
      currentItem: '',
    };
    this.formClick = this.formClick.bind(this);
    this.sortRatings = this.sortRatings.bind(this);
    this.onHelpfulClick = this.onHelpfulClick.bind(this);
  }

  componentDidMount() {
    console.log('review summary current', this.props.currentItem);
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
    const index = Math.floor(Math.random() * 5) + 1;
    axios.get(`http://localhost:3000/api/getitemreviews/${index}`)
      .then((res) => {
        this.setState({
          currentItem: index,
          currentReview: res.data,
        });
        if (this.state.count === false) {
          console.log('i am herrrrrrreee')
          this.countRatings();
        }
      })
      .catch((err) => {
        console.log('error at get item reviews');
      });
  }


  updateHelpfulClick() {
    axios.get(`http://localhost:3000/api/getitemreviews/${this.state.currentItem}`)
      .then((res) => {
        this.setState({
          currentReview: res.data,
        });
      })
      .catch((err) => {
        console.log('error at get item reviews');
      });
  }

  /* ----- FORM CLICK -----*/
  formClick(e) {
    e.preventDefault();
    console.log('form clicked');
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
      count: true,
    });
  }

  sortRatings(e, star) {
    const { currentReview, fullReviews } = this.state;
    e.preventDefault();

    const sortedReviews = [];
    fullReviews.map((singleReview) => {
      singleReview.reviews.map((items) => {
        if (star === 5 && singleReview.productId === this.state.currentItem && items.stars === 5) {
          sortedReviews.push(singleReview);
        }
        if (star === 4 && singleReview.productId === this.state.currentItem && items.stars === 4) {
          sortedReviews.push(singleReview);
        }
        if (star === 3 && singleReview.productId === this.state.currentItem && items.stars === 3) {
          sortedReviews.push(singleReview);
        }
        if (star === 2 && singleReview.productId === this.state.currentItem && items.stars === 2) {
          sortedReviews.push(singleReview);
        }
        if (star === 1 && singleReview.productId === this.state.currentItem && items.stars === 1) {
          sortedReviews.push(singleReview);
        }
      });
    });
    this.setState({
      currentReview: sortedReviews,
    });
    console.log('sorted', sortedReviews);
  }

  /* -----HELPFUL BUTON COUNT-- */
  // eslint-disable-next-line react/sort-comp
  onHelpfulClick(e, type, reviewId) {
    e.preventDefault();
    console.log(this.state.currentItem);
    if (type === 'yes') {
      axios.put('http://localhost:3000/api/helpful', { reviewId })
        .then((res) => {
          console.log('response', res.data);
          this.updateHelpfulClick();
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (type === 'no') {
      axios.put('http://localhost:3000/api/nothelpful', { reviewId })
        .then(() => {
          this.updateHelpfulClick();
        })
        .catch(() => console.log('error at axios put - no'));
    }
  }

  render() {
    const {
      isLoaded, fullReviews, currentReview, ratingsCount, averageRatings, currentItem,
    } = this.state;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        {
          isLoaded ? (
            <ReviewListHeader formClick={this.formClick} currentReview={currentReview} />
          )
            : null
        }
        {
          isLoaded ? (
            <ReviewSnapshot
              ratingsCount={ratingsCount}
              sortRatings={this.sortRatings}
              averageRatings={averageRatings}
              currentReview={currentReview}
            />
          )
            : null
        }
        {
          isLoaded ? (

            <UserDetails
              currentReview={currentReview}
              onHelpfulClick={this.onHelpfulClick}
            />
          )
            : null
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
