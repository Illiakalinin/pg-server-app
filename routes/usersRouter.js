const { Router } = require('express');
const { usersController } = require('../controllers');

// /api/users
const usersRouter = Router();

usersRouter
  .route('/')
  .post(usersController.createUser)
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
