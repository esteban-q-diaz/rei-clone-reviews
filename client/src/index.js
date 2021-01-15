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
      // data for all components to use
      fullReviews: [{ name: 'ez' }],
    };
  }

  /* ----- GET ALL REVIEWS -----*/
  getAllReviews() {
    axios.get('/getallreviews')
      .then((res) => {
        console.log(this.state);
        console.log(res.data);
      })
      .catch(() => {
        console.log('error at get all reviews');
      });
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <ReviewSummary fullReviews={this.state.fullReviews} />
        <ReviewList fullReviews={this.state.fullReviews}/>
      </div>
    );
  }
}

ReactDOM.render(<div><App /></div>, document.getElementById('root'));

export default App;
