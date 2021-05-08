require('dotenv').config()
const mongoose = require('mongoose');

const connection = mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

mongoose.connection.on('error', function(err) {
  if(err) {
    console.log("error connecting mongoose", err, 'ends here------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
  }
});

module.exports = {
  connection,
};
