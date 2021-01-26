const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path')
const mongo = require('../database/product_reviews.js');
const cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//this is needed to make the public folder available to the server
app.use('/', express.static(path.join(__dirname, '..', 'public')));

/* ----- GET ALL REVIEWS --- */

app.get('/api/getallreviews', (req, res) => {
  mongo.getReviews((err, reviews) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(reviews);
    }
  });
});

/* ----- GET CERTAIN ITEM REVIEWS --- */

app.get('/api/getitemreviews/:id', (req, res) => {
  const id = req.params.id;
  mongo.getItemReviews([id], (err, reviews) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(reviews);
    }
  });
});

/* ----- LOAD MORE ITEM--- */

app.get('/api/loadmore/:id', (req, res) => {
  const id = req.params.id;
  const page = req.query.page
  const limit = req.query.limit

  mongo.loadMoreItems([id, page, limit], (err, reviews) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(reviews);
    }
  });
});


/* -----SAVE REVIEW---*/

app.post('/api/postreview/:id', (req, res) => {
  let productId = req.params.id;
  let submitData = req.body;

  mongo.saveReview(productId, submitData, (err, reviews) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(reviews);
    }
  });
});

/* -----HELPFUL BUTON COUNT-- */

app.put('/api/helpful', (req, res) => {
  const reviewId = req.body.reviewId;

  mongo.helpfulCount([reviewId], (err, data) => {
    if (err) {
      res.send(err);
    } else {
      console.log('helpful count updated');
      res.status(202).send(data);
    }
  });
});

/* ----- NOT HELPFUL BUTON COUNT-- */

app.put('/api/nothelpful', (req, res) => {
  const reviewId = req.body.reviewId;

  mongo.notHelpfulCount([reviewId], (err, data) => {
    if (err) {
      res.send(err);
    } else {
      console.log('helpful count updated');
      res.status(202).send(data);
    }
  });
});

/* ----- SORT BY MORE RECENT --- */

app.get('/api/mostrecent', (req, res) => {
  mongo.sortMostRevent((err, reviews) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(reviews);
    }
  });
});

/* ----- SORT BY H2L RECENT --- */

app.get('/api/hightolow', (req, res) => {

  // mongo.sortMostRevent()
  mongo.highToLow((err, reviews) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(reviews)
    }
  });
});

/* ----- SORT BY L2H RECENT --- */

app.get('/api/lowtohigh', (req, res) => {

  // mongo.sortMostRevent()
  mongo.lowToHigh((err, reviews) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(reviews)
    }
  });
});

/* ----- SORT BY MOST HELPFUL --- */

app.get('/api/mosthelpful', (req, res) => {

  // mongo.sortMostRevent()
  mongo.mostHelpful((err, reviews) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(reviews)
    }
  });
});

/* ----- SORT BY MOST RELEVANT --- */

app.get('/api/mostrelevant', (req, res) => {

  // mongo.sortMostRevent()
  mongo.mostRelevant((err, reviews) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(reviews)
    }
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('err');
  } else {
    console.log(`Connected on localhost:${PORT}`);
  }
});

module.exports = app;