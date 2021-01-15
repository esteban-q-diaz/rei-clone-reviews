import React from 'react';
import ReactDOM from 'react-dom';
import ReviewSummary from '../components/review_summary/ReviewSummary.jsx';
import ReviewList from '../components/review_list/ReviewList.jsx';

class App () extends React.Component {
  constructor() {
    super();
    this.state = {
      // data for all components to use
      fullReviews: []
    }
  }
}

ReactDOM.render(<div><ReviewSummary fullReviews={this.state.fullReviews}/> <ReviewList fullReviews={this.state.fullReviews}/> </div>, document.getElementById('root'));
