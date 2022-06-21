const mongoose = require('mongoose');

// connect to database and export it
module.exports = mongoose.connect(
  'mongodb://localhost/3sr',
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to database');
    }
  }
);
