const mongoose = require('mongoose');
const connection = require('./connection.js');

// let connection = mongoose.connect('mongodb://localhost:27017/product_reviews', { useNewUrlParser: true, useUnifiedTopology: true })

const productReviewSchema = new mongoose.Schema({
  productId: Number,
  reviews: [
    {
      reviewId: { type: Number, required: true, unique: true },
      productName: String,
      image: String,
      user: { type: String, required: true },
      email: { type: String, required: true },
      city: String,
      state: String,
      review_total: Number,
      stars: { type: Number, required: true },
      date: Date,
      title: { type: String, required: true },
      description: { type: String, required: true },
      yoga_experience: String,
      age: Number,
      recommended: Boolean,
      helpful_count: Number,
      not_helpful_count: Number,
    },
  ],
});

const productReview = mongoose.model('productReview', productReviewSchema)

/* -----GET REVIEWS--- */

const getReviews = function (callback) {
  productReview.find((err, reviews) => {
    if (err) {
      callback(err);
    } else {
      callback(null, reviews);
    }
  }).limit(12);
};

/* -----SAVE REVIEW--- */

const saveReview = function () {
  let sampleReview = new productReview ({
    productId: 1,
    reviews: [{
      reviewId: 1, email: 'ez@gmail.com', city: 'san jose', review_total: 10, stars: 5,
    }],
  });

  sampleReview.save((err, review) => {
    if (err) {
      console.log(err);
    } else {
      console.log(review);
    }
  });
};

module.exports = {
  productReview, getReviews, saveReview,
};
