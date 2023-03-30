const { Router } = require('express');

const { usersController } = require('../controllers');
const { paginate, validate } = require('../middleware');

// /api/users
const usersRouter = Router();

usersRouter
  .route('/')
  .post(validate.validateUsersOnCreate, usersController.createUser)
  .get(paginate.paginateUser, usersController.getUsers);

usersRouter
  .route('/:userId')
  .patch(validate.validateUsersOnUpdate, usersController.updateUser)
  .get((req, res) => {
    res.send('ok2');
  })
  .delete(usersController.deleteUser);

module.exports = usersRouter;
