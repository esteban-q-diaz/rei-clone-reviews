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
      date: {type: String, default: Date},
      realDate: Date,
      title: String,
      description: String,
      yoga_experience: String,
      age: Number,
      recommended: Boolean,
    },
  ],
});

const ProductReview = mongoose.model('productReview', productReviewSchema);

let currentProductId;

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

const getItemReviews = async function (id, callback) {
  var productId = Number(id[0]);
  this.currentProductId = productId;
  try {
    const results = await ProductReview.find({productId: productId}).sort('reviews.date').limit(100);
    callback(null, results);
  }
  catch {
    console.log('error');
  }
};



  // var productId = Number(id[0]);
  // ProductReview.find({productId: productId}, (err, reviews) => {
  //   if (err) {
  //     callback(err);
  //   } else {
  //     callback(null, reviews);
  //   }
  // }).limit(100);
// };


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

const sortMostRevent = async function(callback) {
  // refactor this
    try {
      const results = await ProductReview.find({productId: this.currentProductId}).sort('reviews.date').limit(50);
      callback(null, results);
    }
    catch {
      console.log('error');
    }
}

const highToLow = async function(callback) {
  // refactor this
    try {
      const results = await ProductReview.find({productId: this.currentProductId}).sort({'reviews.stars': -1}).limit(50);
      callback(null, results);
    }
    catch {
      console.log('error');
    }
}

const lowToHigh = async function(callback) {
  // refactor this
    try {
      const results = await ProductReview.find({productId: this.currentProductId}).sort({'reviews.stars': 1}).limit(50);
      callback(null, results);
    }
    catch {
      console.log('error');
    }
}

const mostHelpful = async function(callback) {
  // refactor this
    try {
      const results = await ProductReview.find({productId: this.currentProductId}).sort({'helpful_count': -1}).limit(50);
      callback(null, results);
    }
    catch {
      console.log('error');
    }
}

const mostRelevant = async function(callback) {
  // refactor this
    try {
      const results = await ProductReview.find({productId: this.currentProductId}).sort({'reviews.review_total': -1}).limit(50);
      callback(null, results);
    }
    catch {
      console.log('error');
    }
}


module.exports = {
  ProductReview, getReviews, saveReview, helpfulCount, getItemReviews, notHelpfulCount, sortMostRevent, highToLow, lowToHigh, mostHelpful, mostRelevant,
};
