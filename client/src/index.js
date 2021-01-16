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
      currentItem: '',
      isLoaded: false,
      // data for all components to use
      // fullReviews: [{ name: 'ez' }],
      // currentReview: [],
    };
    // this.getItemReviews = this.getItemReviews.bind(this);
    // this.onHelpfulClick = this.onHelpfulClick.bind(this);
  }

  componentDidMount() {
    console.log("this", this.state.currentItem);
    this.getItemReviews();
  }

  /* ----- GET ALL REVIEWS -----*/
  // eslint-disable-next-line react/sort-comp
  // getAllReviews() {
  //   axios.get('http://localhost:3000/api/getallreviews')
  //     .then((res) => {
  //       this.setState({
  //         fullReviews: res.data,
  //       });
  //       this.getItemReviews();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  /* ----- GET REIVEWS FOR ONE ITEM -----*/
  getItemReviews() {
    const index = Math.floor(Math.random() * 5) + 1;
    console.log("index", index);
    // const currentReviews = [];
    this.setState({
      isLoaded: true,
      currentItem: index,
    });
  }

  /* ----- HELPFUL CLICK  -----*/

  // onHelpfulClick(e, type, reviewId) {
  //   e.preventDefault();
  //   console.log('click worked', type, reviewId, this.state);
  //   if (type === 'yes') {
  //     axios.put('http://localhost:3000/api/helpful', {reviewId: reviewId})
  //       .then((res) => {
  //         console.log('response', res.data);
  //         this.getAllReviews();
  //       })
  //       .catch((err) =>{ console.log(err)
  //       });
  //   }
  //   if (type === 'no') {
  //     axios.put('http://localhost:3000/api/nothelpful', {reviewId: reviewId})
  //       .then((res) => console.log('response'))
  //       .catch((err) => console.log('error at axios put - no'));
  //   }
  // }

  render() {
    const { isLoaded, fullReviews, currentReview, currentItem } = this.state;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        {/* {
          isLoaded ? (
            <ReviewSummary
              fullReviews={fullReviews}
              currentReview={currentReview}
            />
          )
            : null
        } */}
        {
          isLoaded ? (
            <ReviewList
              // fullReviews={fullReviews}
              // currentReview={currentReview}
              // getAllReviews={this.getAllReviews}
              currentItem={currentItem}
              // onHelpfulClick={this.onHelpfulClick}
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



    // const innerFunc = (number) => {
    //   // eslint-disable-next-line array-callback-return
    //   fullReviews.map((item) => {
    //     if (item.productId === number) {
    //       currentReviews.push(item);
    //     }
    //   });
    // };
    // innerFunc(index);
    // this.setState({
    //   isLoaded: true,
    //   currentReview: currentReviews,
    // });

    // console.log('current review in index.js', index, currentReview);



    // will not need this - just send index
    // const { fullReviews, currentReview } = this.state;