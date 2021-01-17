import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/extensions
import ReviewSummary from '../components/review_summary/ReviewSummary.jsx';
// eslint-disable-next-line import/extensions
import ReviewList from '../components/review_list/ReviewList.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.getItemReviews();
  }

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

  render() {
    const { isLoaded, fullReviews, currentReview, currentItem } = this.state;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        {
          isLoaded ? (
            <ReviewSummary
              currentItem={currentItem}
            />
          )
            : null
        }
        {
          isLoaded ? (
            <ReviewList
              currentItem={currentItem}
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