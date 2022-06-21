const express = require('express');
const morgan = require('morgan');

const checkRouter = require('./routes/check.route.js');
const allTranslateRoute = require('./routes/traduction/allTranslates.route');

require('./db/db.config');
require('dotenv').config();
const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/check', checkRouter);
app.use('/api/v1/allTraduction', allTranslateRoute);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
