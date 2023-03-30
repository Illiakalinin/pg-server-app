const express = require('express');
const { errorHandlers } = require('./middleware');
const router = require('./routes');

const app = express();

app.use(express.json());

app.get('/test/:testId/users/:userId', (req, res) => {
  console.log('req.params :>> ', req.params);
  res.send();
});

app.get(
  '/',
  (req, res, next) => {
    next();
  },
  (req, res) => {
    res.send();
  }
);

app.use('/api', router);

app.use(errorHandlers.errorHandler);

module.exports = app;
