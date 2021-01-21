import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import ReviewListHeader from '../components/review_summary/ReviewListHeader.jsx';
// eslint-disable-next-line import/extensions
import AverageRatings from '../components/review_summary/AverageRatings.jsx';
// eslint-disable-next-line import/extensions
import UserDetails from '../components/review_list/UserDetails.jsx';
// eslint-disable-next-line import/extensions
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
      // eslint-disable-next-line react/no-unused-state
      currentReviewTwo: [],
      ratingsCount: {
        one: 0, two: 0, three: 0, four: 0, five: 0,
      },
      averageRatings: 0,
      currentItem: '',
      fiveFilter: false,
      fourFilter: false,
      threeFilter: false,
      twoFilter: false,
      oneFilter: false,
      clear: false,
      fiveStarReviews: [],
      fourStarReviews: [],
      threeStarReviews: [],
      twoStarReviews: [],
      oneStarReviews: [],
    };
    this.sortRatings = this.sortRatings.bind(this);
    this.onHelpfulClick = this.onHelpfulClick.bind(this);
    this.closeFilterClick = this.closeFilterClick.bind(this);
    this.filterClick = this.filterClick.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.loadMoreItems = this.loadMoreItems.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { currentItem } = this.props;
    // eslint-disable-next-line no-console
    console.log('review summary current', currentItem);
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
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  /* ----- GET REIVEWS FOR ONE ITEM -----*/
  getItemReviews() {
    const { count } = this.state;
    const index = Math.floor(Math.random() * 5) + 1;
    axios.get(`http://localhost:3000/api/getitemreviews/${index}`)
      .then((res) => {
        this.setState({
          currentItem: index,
          currentReview: res.data,
          // eslint-disable-next-line react/no-unused-state
          currentReviewTwo: res.data,
        });
        if (count === false) {
          console.log('i am herrrrrrreee');
          this.countRatings();
        }
      })
      .catch((err) => {
        console.log('error at get item reviews');
      });
  }

    /* ----- LOADMORE ITEMS -----*/
    loadMoreItems(e) {
      e.preventDefault();
        axios.get(`http://localhost:3000/api/loadmore/${this.state.currentItem}`)
        .then((res) => {
          this.setState({
            currentReview: res.data,
            currentReviewTwo: res.data,
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

  /* ----- FORM CLICK -----*/
  submitForm(e, submitData) {
    e.preventDefault();
    // console.log('form clicked', submitData);
    axios.post(`http://localhost:3000/api/postreview/${this.state.currentItem}`, submitData)
      .then(res => console.log("the data:", res.data))
      .catch(err => console.log('submit form did not work'))
  }

  /* ----- COUNT HOW MANY STARS EACH LEVEL (1-5) HAS -----*/
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
    // calculates the average of star reviews
    this.setState({
      averageRatings: Math.round(average * 10) / 10,
      isLoaded: true,
      count: true,
    });
  }

  /* ----- SORT BY RATING STARS -----*/
  sortRatings(e, star) {
    const { fullReviews } = this.state;
    e.preventDefault();
    const sortedReviews = [];
    fullReviews.map((singleReview) => {
      singleReview.reviews.map((items) => {
        if (star === 5 && singleReview.productId === this.state.currentItem && items.stars === 5) {
          sortedReviews.push(singleReview);
          this.setState({
            fiveStarReviews: sortedReviews,
            fiveFilter: true,
            clear: true,
          });
        }
        if (star === 4 && singleReview.productId === this.state.currentItem && items.stars === 4) {
          sortedReviews.push(singleReview);
          this.setState({
            fourStarReviews: sortedReviews,
            fourFilter: true,
            clear: true,
          })
        }
        if (star === 3 && singleReview.productId === this.state.currentItem && items.stars === 3) {
          sortedReviews.push(singleReview);
          this.setState({
            threeStarReviews: sortedReviews,
            threeFilter: true,
            clear: true,
          })
        }
        if (star === 2 && singleReview.productId === this.state.currentItem && items.stars === 2) {
          sortedReviews.push(singleReview);
          this.setState({
            twoStarReviews: sortedReviews,
            twoFilter: true,
            clear: true,
          })
        }
        if (star === 1 && singleReview.productId === this.state.currentItem && items.stars === 1) {
          sortedReviews.push(singleReview);
          this.setState({
            oneStarReviews: sortedReviews,
            oneFilter: true,
            clear: true,
          });
        }
      });
    });
    // refactor to use async or promises
    // waits til all the setStates above have been updated then if makes currentReview have only the filtered
    let asyncFunc = () => {
      let filtered = [...this.state.fiveStarReviews, ...this.state.fourStarReviews, ...this.state.threeStarReviews, ...this.state.twoStarReviews, ...this.state.oneStarReviews]

      this.setState((prevState) => ({
            currentReview: filtered,
          }));

    };
    setTimeout(function(){ asyncFunc();}, 1)
  }

  /* ----- UNFILTER / DELETE FILTER BOX -----*/
  closeFilterClick(e, num) {
    e.preventDefault();
    const {oneFilter, twoFilter, threeFilter, fourFilter, fiveFilter} = this.state;
    if (num === 1) {
      this.setState({
        oneFilter: false,
        oneStarReviews: [],
      });
      if (twoFilter === false && threeFilter === false && fourFilter === false && fiveFilter === false) {
        this.getAllReviews();
      }
    }
    if (num === 2) {
      this.setState({
        twoFilter: false,
        twoStarReviews: [],
      });
      if (oneFilter === false && threeFilter === false && fourFilter === false && fiveFilter === false) {
        this.getAllReviews();
      }
    }
    if (num === 3) {
      this.setState({
        threeFilter: false,
        threeStarReviews: [],
      });
      if (oneFilter === false && twoFilter === false && fourFilter === false && fiveFilter === false) {
        this.getAllReviews();
      }
    }
    if (num === 4) {
      this.setState({
        fourFilter: false,
        fourStarReviews: [],
      });
      if (oneFilter === false && twoFilter === false && threeFilter === false && fiveFilter === false) {
        this.getAllReviews();
      }
    }
    if (num === 5) {
      this.setState({
        fiveFilter: false,
        fiveStarReviews: [],
      });
      if (oneFilter === false && twoFilter === false && threeFilter === false && fourFilter === false) {
        this.getAllReviews();
      }
    }
    // refactor this here
    if (num === 'clear' || twoFilter === false && threeFilter === false && fourFilter === false && fiveFilter === false) {
      this.setState({
        fiveFilter: false,
        fourFilter: false,
        threeFilter: false,
        twoFilter: false,
        oneFilter: false,
        clear: false,
        fiveStarReviews: [],
        fourStarReviews: [],
        threeStarReviews: [],
        twoStarReviews: [],
        oneStarReviews: [],
      });
      this.getAllReviews();
    }
    this.sortRatings(e);
  }

  /* ----- SORT DROP DOWN FUNCTIONS -----*/
  filterClick(e) {
    e.preventDefault()
    console.log('filter clicked', e.target.value)
    if (e.target.value === 'mostRecent') {
      axios.get(`http://localhost:3000/api/mostrecent`)
      .then((res) => {
        console.log('filter clicked successs', res.data)
        this.setState({
          currentReview: res.data,
        });
      })
      .catch((err) => {
        console.log('error at get most recent');
      });
    }
    if (e.target.value === 'highToLow') {
      axios.get(`http://localhost:3000/api/hightolow`)
      .then((res) => {
        this.setState({
          currentReview: res.data,
        });
      })
      .catch((err) => {
        console.log('error at get most recent');
      });
    }
    if (e.target.value === 'lowToHigh') {
      axios.get(`http://localhost:3000/api/lowtohigh`)
      .then((res) => {
        console.log('filter l2hclicked successs', res.data);
        this.setState({
          currentReview: res.data,
        });
      })
      .catch((err) => {
        console.log('error at get most recent');
      });
    }
    if (e.target.value === 'mostHelpful') {
      axios.get(`http://localhost:3000/api/mosthelpful`)
      .then((res) => {
        this.setState({
          currentReview: res.data,
        });
      })
      .catch((err) => {
        console.log('error at get most recent');
      });
    }
    if (e.target.value === 'mostRelevant') {
      axios.get(`http://localhost:3000/api/mostrelevant`)
      .then((res) => {
        console.log('filter most relevant clicked successs', res.data);
        this.setState({
          currentReview: res.data,
        });
      })
      .catch((err) => {
        console.log('error at get most recent');
      });
    }
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

  /* ----- UPDATE HELPFUL COUNT IMMEDIATELY-----*/
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

  render() {
    const {
      isLoaded, fullReviews, currentReview, ratingsCount, averageRatings, currentItem, filters, fiveFilter, fourFilter, threeFilter, twoFilter, oneFilter, clear
    } = this.state;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        {
          isLoaded ? (
            <ReviewListHeader
            currentReview={currentReview}
            submitForm={this.submitForm}
            />
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
              fiveFilter={fiveFilter}
              fourFilter={fourFilter}
              threeFilter={threeFilter}
              twoFilter={twoFilter}
              oneFilter={oneFilter}
              clear={clear}
              closeFilterClick={this.closeFilterClick}
              filterClick={this.filterClick}
            />
          )
            : null
        }
        {
          isLoaded ? (

            <UserDetails
              currentReview={currentReview}
              onHelpfulClick={this.onHelpfulClick}
              loadMoreItems={this.loadMoreItems}
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
