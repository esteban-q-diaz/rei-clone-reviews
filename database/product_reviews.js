const mongoose = require('mongoose');
const connection = require('./connection.js');
const faker = require('faker');
const moment = require('moment');

// let connection = mongoose.connect('mongodb://localhost:27017/product_reviews', { useNewUrlParser: true, useUnifiedTopology: true })
const products = [
  { name: `HOKA ONE ONE Clifton 7 Road-Running Shoes - Women's`, id: 1, url: 'https://www.rei.com/media/8f078d8a-aa49-4f1e-9c8f-120063bb2042?size=646x485' },
  { name: 'Manduka Cork Yoga Block', id: 2, url: 'https://www.rei.com/media/464a596c-9755-4535-aa1b-4f2bae31d780?size=646x485' },
  { name: 'Smith Trace MIPS Helmet', id: 3, url: 'https://www.rei.com/media/992d6626-cad0-4854-8c5b-98081f51eb05?size=646x485' },
  { name: 'Co-op Cycles ADV 1.1 Bike', id: 4, url: 'https://www.rei.com/media/3336b5c6-ccb5-4177-ab9b-6d04a0ea40fa?size=646x485' },
  { name: `REI Co-op Trailbreak 60 Pack - Men's`, id: 5, url: 'https://www.rei.com/media/c74fc48b-628d-45ea-8249-f073a6f4d12e?size=646x485' },
];


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
  }).limit(200);
};

/* ----- GET CERTAIN ITEM REVIEWS --- */

const getItemReviews = async function (id, callback) {
  var productId = Number(id[0]);
  this.currentProductId = productId;
  try {
    const results = await ProductReview.find({productId: productId}).sort('reviews.date').limit(12);
    callback(null, results);
  }
  catch {
    console.log('error');
  }
};

/* ----- GET CERTAIN ITEM REVIEWS --- */

const loadMoreItems = async function (id, callback) {
  var productId = Number(id[0]);
  this.currentProductId = productId;
  try {
    const results = await ProductReview.find({productId: productId}).sort('reviews.date').limit(24);
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

const saveReview = function (id, submitData, callback) {
  console.log("products:", submitData.recommend)
  let productName;
  let url;
  let age;
  const newDate = new Date();
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === Number(id)) {
      productName = products[i].name;
      url = products[i].url;
    }
  }
  if (submitData.age !== '') {
    let sliceAge = submitData.age.split('-')
    let minNum = Number(sliceAge[0]);
    let maxNum = Number(sliceAge[1]);
    age = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  } else {
    age = submitData.age;
  }


  if (submitData.recommend !== true || submitData.recommend !== false) {
    submitData.recommend = true;
  }
  let slicedLocation = submitData.location.split(',')
  let city = slicedLocation[0]
  let state = slicedLocation[1]
console.log('sliced', city, "state", state);
  // figure out a way to get username review to increment
  const sampleReview = new ProductReview({
    productId: Number(id),
    reviewId: faker.random.number({ min: 1000000, max: 9999999 }),
    helpful_count: 0,
    not_helpful_count: 0,
    reviews: [
      {
      productName: productName,
      image: url,
      name: submitData.nickname,
      user: submitData.nickname,
      email: submitData.email,
      city: city,
      state: state,
      review_total: 1,
      stars: submitData.starRating,
      date: moment(newDate).fromNow(),
      realDate: newDate,
      title: submitData.title,
      description: submitData.review,
      age: age,
      recommended: submitData.recommend,
    },
  ],
  });

  sampleReview.save((err, review) => {
    if (err) {
      callback('err');
    } else {
      callback(null, review);
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
      const results = await ProductReview.find({productId: this.currentProductId}).sort({'reviews.review_total': -1}).limit(50)
      // .exec((err, results) =>{
      //   if (err)...
      // });
      callback(null, results);
    }
    catch {
      console.log('error');
    }
}

module.exports = {
  ProductReview, getReviews, saveReview, helpfulCount, getItemReviews, notHelpfulCount, sortMostRevent, highToLow, lowToHigh, mostHelpful, mostRelevant, loadMoreItems,
};
