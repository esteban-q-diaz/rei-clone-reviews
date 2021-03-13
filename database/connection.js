const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/product_reviews', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

mongoose.connection.on('error', function(err) {
  if(err) {
    console.log("error connecting mongoose", err, 'ends here------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
  }
});

module.exports = {
  connection,
};
