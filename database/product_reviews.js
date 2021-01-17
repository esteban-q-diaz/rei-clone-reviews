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
  }).limit(100);
};

/* ----- GET CERTAIN ITEM REVIEWS --- */

const getItemReviews = function (id, callback) {
  var productId = Number(id[0]);
  ProductReview.find({productId: productId}, (err, reviews) => {
    if (err) {
      callback(err);
    } else {
      callback(null, reviews);
    }
  }).limit(100);
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

// { $inc: { views: 1 } }, {new: true }

/* -----HELPFUL BUTON COUNT-- */

const helpfulCount = function (param, callback) {
  ProductReview.findOneAndUpdate({reviewId: param[0]}, { $inc: { helpful_count: 1 } }, {new: true }, (err, review) => {
    if (err) {
      console.log('err', review, param[0]);
    } else {
      callback(null, review);
    }
  });
};

/* ----- NOT HELPFUL BUTON COUNT-- */

const notHelpfulCount = function (param, callback) {
  ProductReview.findOneAndUpdate({reviewId: param[0]}, { $inc: { not_helpful_count: 1 } }, {new: true }, (err, review) => {
    if (err) {
      console.log('err', review, param[0]);
    } else {
      callback(null, review);
    }
  });
};

module.exports = {
  ProductReview, getReviews, saveReview, helpfulCount, getItemReviews, notHelpfulCount,
};
