const { Router } = require('express');

// /api/users
const usersRouter = Router();

usersRouter
  .route('/')
  .post(() => {})
  .get((req, res) => {
    res.send('OK');
  });

usersRouter
  .route('/:id')
  .post(() => {})
  .get((req, res) => {
    res.send('ok2');
  })
  .delete(() => {});

module.exports = usersRouter;
