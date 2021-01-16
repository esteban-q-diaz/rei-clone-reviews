import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/extensions
import ReviewSummary from '../components/review_summary/ReviewSummary.jsx';
// eslint-disable-next-line import/extensions
import ReviewList from '../components/review_list/ReviewList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      // data for all components to use
      fullReviews: [{ name: 'ez' }],
      currentReview: [],
    };
    this.getItemReviews = this.getItemReviews.bind(this);
    this.onHelpfulClick = this.onHelpfulClick.bind(this);
  }

  componentDidMount() {
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
    const currentReview = [];
    this.setState({
      isLoaded: false,
    });
    const innerFunc = (number) => {
      this.state.fullReviews.map((item) => {
        if (item.productId === number) {
          currentReview.push(item);
        }
      });
    };
    innerFunc(index);
    this.setState({
      isLoaded: true,
      currentReview: currentReview,
    });

    console.log("current review in index.js", this.state.currentReview)
    return index;
  }

  /* ----- HELPFUL CLICK  -----*/

  onHelpfulClick(e, type, reviewId) {
    e.preventDefault();
    console.log("click worked", type, reviewId, this.state);
  }

  render() {
    const { isLoaded, fullReviews, currentReview } = this.state;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        {
          isLoaded ? (
            <ReviewSummary
              fullReviews={fullReviews}
              currentReview={currentReview}
            />
          )
            : null
        }
        {
          isLoaded ? (
            <ReviewList
              fullReviews={fullReviews}
              currentReview={currentReview}
              getAllReviews={this.getAllReviews}
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
