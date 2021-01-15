const express = require('express');
const app = express();
const PORT = 3000;
const mongo = require('../database/product_reviews.js');

/* -----GET REVIEWS--- */

app.get('/api/getallreviews', (req, res) => {
  mongo.getReviews((err, reviews) => {
    if (err) {
      console.log('err');
    } else {
      res.send(reviews);
    }
  });
});

/* -----SAVE REVIEW---*/

app.post('/api/postreviews', (req, res) => {
  // console.log('successss')
  mongo.saveReview()
  // mongo.saveReview((err, reviews) => {
  //   if (err) {
  //     console.log('err');
  //   } else {
  //     console.log('reviews');
  //   }
  // });
});

app.post('/api/helpfulbutton', (req, res) => {

});

app.post('/api/loadmore', (req, res) => {

});

app.post('/api/sort', (req, res) => {

});

app.listen(PORT, (err) => {
  if (err) {
    console.log('err');
  } else {
    console.log(`Connected on localhost:${PORT}`);
  }
});
