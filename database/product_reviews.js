const mongoose = require('mongoose');
const connection = require('./connection.js');

// let connection = mongoose.connect('mongodb://localhost:27017/product_reviews', { useNewUrlParser: true, useUnifiedTopology: true })

const productReviewSchema = new mongoose.Schema({
  productId: Number,
  reviewId: { type: Number, unique: true },
  helpful_count: Number,
  not_helpful_count: Number,
  reviews: [
    {
      productName: String,
      image: String,
      name: String,
      user: String,
      email: String,
      city: String,
      state: String,
      review_total: Number,
      stars: Number,
      date: Date,
      title: String,
      description: String,
      yoga_experience: String,
      age: Number,
      recommended: Boolean,
    },
  ],
});

const ProductReview = mongoose.model('productReview', productReviewSchema)

/* -----GET REVIEWS--- */

const getReviews = function (callback) {
  ProductReview.find((err, reviews) => {
    if (err) {
      callback(err);
    } else {
      callback(null, reviews);
    }
  }).limit(12);
};

/* -----SAVE REVIEW--- */

const saveReview = function () {
  const sampleReview = new ProductReview({
    productId: 1,
    reviews: [{
      reviewId: 1, email: 'ez@gmail.com', city: 'san jose', review_total: 10, stars: 5,
    }],
  });

  sampleReview.save((err, review) => {
    if (err) {
      console.log('err');
    } else {
      console.log('review');
    }
  });
};

/* -----HELPFUL BUTON COUNT-- */

const helpfulButtonCount = function (param, callback) {
  ProductReview.findOneAndUpdate({reviewId: param[0]}, {helpful_count: param[1]++}, (err, review) => {
    if (err) {
      callback(err)
    } else {
      callback(null, review)
    }
  })
}

module.exports = {
  ProductReview, getReviews, saveReview, helpfulButtonCount,
};
