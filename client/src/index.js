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
      currentReviewCount: 0,
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
      pagination: 1,
      sortedTotal: [],
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
    const { count, fullReviews, currentItem } = this.state;
    const index = Math.floor(Math.random() * 5) + 1;
    let totalCount = 0;
    fullReviews.map((reviews) => {
      if (reviews.productId === index) {
        totalCount++
      }
    });
    axios.get(`http://localhost:3000/api/getitemreviews/${index}`)
      .then((res) => {
        this.setState({
          currentItem: index,
          currentReview: res.data,
          // eslint-disable-next-line react/no-unused-state
          currentReviewTwo: res.data,
          currentReviewCount: totalCount,
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
    const { currentItem, pagination, currentReview, count } = this.state;
    e.preventDefault();
    axios.get(`http://localhost:3000/api/loadmore/${currentItem}/?page=${pagination}&limit=12`)
      .then((res) => {
        this.setState({
          currentReview: [...currentReview, ...res.data],
          currentReviewTwo: [...currentReview, ...res.data],
        });
        this.setState({
          pagination: pagination + 1,
        });
        if (count === false) {
          this.countRatings();
        }
      })
      .catch((err) => {
        console.log('error at get item reviews: ', err);
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
    const {
      fullReviews, ratingsCount, currentItem,
    } = this.state;
    let occur = 0;
    // changed from curent to full reviews
    fullReviews.map((items) => {
      items.reviews.map((reviews) => {
        if (items.productId === currentItem) {
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
    e.preventDefault();
    let starLimitCount = 0;
    const { currentReviewTwo, sortedTotal } = this.state;
    currentReviewTwo.map((singleReview) => {
      singleReview.reviews.map((items) => {
        if (items.stars === star) {
          // eslint-disable-next-line no-plusplus
          starLimitCount++;
        }
      });
    });
    axios.put('http://localhost:3000/api/sort', { star, limit: starLimitCount })
      .then((res) => {
        this.setState({
          currentReview: [...sortedTotal, ...res.data],
          sortedTotal: [...sortedTotal, ...res.data],
        });
        // Make the filter boxes appear
        if (star === 5) {
          this.setState({
            fiveFilter: true,
            clear: true,
          });
        }
        if (star === 4) {
          this.setState({
            fourFilter: true,
            clear: true,
          });
        }
        if (star === 3) {
          this.setState({
            threeFilter: true,
            clear: true,
          });
        }
        if (star === 2) {
          this.setState({
            twoFilter: true,
            clear: true,
          });
        }
        if (star === 1) {
          this.setState({
            oneFilter: true,
            clear: true,
          });
        }
      })
      .catch(err => console.log('Error at Sort Ratings', err));
  }

  /* ----- UNFILTER / DELETE FILTER BOX -----*/
  closeFilterClick(e, num) {
    e.preventDefault();
    const {
      oneFilter,
      twoFilter,
      threeFilter,
      fourFilter,
      fiveFilter,
      currentReview,
      currentReviewTwo,
    } = this.state;
    if (num === 1) {
      let filtered = [];
      currentReview.map((reviews) => {
        if (reviews.reviews[0].stars !== 1) {
          filtered.push(reviews);
        }
      });
      this.setState({
        oneFilter: false,
        currentReview: filtered,
      });

      if (twoFilter === false
        && threeFilter === false
        && fourFilter === false
        && fiveFilter === false) {
        this.setState({
          currentReview: currentReviewTwo,
        });
      }
    }
    if (num === 2) {
      let filtered = [];
      currentReview.map((reviews) => {
        if (reviews.reviews[0].stars !== 2) {
          filtered.push(reviews);
        }
      });
      this.setState({
        twoFilter: false,
        currentReview: filtered,
      });

      if (oneFilter === false
        && threeFilter === false
        && fourFilter === false
        && fiveFilter === false) {
        this.setState({
          currentReview: currentReviewTwo,
        });
      }
    }
    if (num === 3) {
      let filtered = [];
      currentReview.map((reviews) => {
        if (reviews.reviews[0].stars !== 3) {
          filtered.push(reviews);
        }
      });
      this.setState({
        threeFilter: false,
        currentReview: filtered,
      });

      if (twoFilter === false
        && oneFilter === false
        && fourFilter === false
        && fiveFilter === false) {
        this.setState({
          currentReview: currentReviewTwo,
        });
      }
    }
    if (num === 4) {
      let filtered = [];
      currentReview.map((reviews) => {
        if (reviews.reviews[0].stars !== 4) {
          filtered.push(reviews);
        }
      });
      this.setState({
        fourFilter: false,
        currentReview: filtered,
      });

      if (twoFilter === false
        && threeFilter === false
        && oneFilter === false
        && fiveFilter === false) {
        this.setState({
          currentReview: currentReviewTwo,
        });
      }
    }
    if (num === 5) {
      let filtered = [];
      currentReview.map((reviews) => {
        if (reviews.reviews[0].stars !== 5) {
          filtered.push(reviews);
        }
      });
      this.setState({
        fiveFilter: false,
        currentReview: filtered,
      });

      if (twoFilter === false
        && threeFilter === false
        && fourFilter === false
        && oneFilter === false) {
        this.setState({
          currentReview: currentReviewTwo,
        });
      }
    }
    if (num === 'clear' || twoFilter === false && threeFilter === false && fourFilter === false && fiveFilter === false) {
      this.setState({
        fiveFilter: false,
        fourFilter: false,
        threeFilter: false,
        twoFilter: false,
        oneFilter: false,
        clear: false,
        currentReview: currentReviewTwo,
      });
    }
  }

  /* ----- SORT DROP DOWN FUNCTIONS -----*/
  filterClick(e) {
    e.preventDefault();
    const { currentReviewTwo } = this.state
    let sortLimit = currentReviewTwo.length;
    if (e.target.value === 'mostRecent') {
      axios.post(`http://localhost:3000/api/mostrecent`, { sortLimit })
        .then((res) => {
          this.setState({
            currentReview: res.data,
          });
        })
        .catch((err) => {
          console.log('error at get most recent', err);
        });
    }
    if (e.target.value === 'highToLow') {
      axios.post(`http://localhost:3000/api/hightolow`, { sortLimit })
        .then((res) => {
          this.setState({
            currentReview: res.data,
          });
        })
        .catch((err) => {
          console.log('error at get most recent', err);
        });
    }
    if (e.target.value === 'lowToHigh') {
      axios.post(`http://localhost:3000/api/lowtohigh`, { sortLimit })
        .then((res) => {
          this.setState({
            currentReview: res.data,
          });
        })
        .catch((err) => {
          console.log('error at get most recent', err);
        });
    }
    if (e.target.value === 'mostHelpful') {
      axios.post(`http://localhost:3000/api/mosthelpful`, { sortLimit })
        .then((res) => {
          this.setState({
            currentReview: res.data,
          });
        })
        .catch((err) => {
          console.log('error at get most recent', err);
        });
    }
    if (e.target.value === 'mostRelevant') {
      axios.post(`http://localhost:3000/api/mostrelevant`, { sortLimit })
        .then((res) => {
          console.log('filter most relevant clicked successs', res.data);
          this.setState({
            currentReview: res.data,
          });
        })
        .catch((err) => {
          console.log('error at get most recent', err);
        });
    }
  }

  /* -----HELPFUL BUTON COUNT-- */
  // eslint-disable-next-line react/sort-comp
  onHelpfulClick(e, type, reviewId) {
    e.preventDefault();
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
    const { currentItem } = this.state;
    axios.get(`http://localhost:3000/api/getitemreviews/${currentItem}`)
      .then((res) => {
        this.setState({
          currentReview: res.data,
        });
      })
      .catch((err) => {
        console.log('error at get item reviews', err);
      });
  }

  render() {
    const {
      isLoaded,
      fullReviews,
      currentReview,
      ratingsCount,
      averageRatings,
      currentItem,
      filters,
      fiveFilter,
      fourFilter,
      threeFilter,
      twoFilter,
      oneFilter,
      clear,
      doneFiltering,
      currentReviewCount,
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
              currentReviewCount={currentReviewCount}
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
              doneFiltering={doneFiltering}
            />
          )
            : null
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('reviews'));

export default App;
