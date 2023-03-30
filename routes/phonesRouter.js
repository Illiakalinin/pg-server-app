const { Router } = require('express');
const { phonesController } = require('../controllers');
const { paginate } = require('../middleware');

// /api/phones
const phonesRouter = Router();

phonesRouter
  .route('/')
  .post(() => {})
  .get(paginate.paginatePhone, phonesController.getPhones);

phonesRouter
  .route('/:phoneId')
  .patch(() => {})
  .get((req, res) => {
    res.send('phonesOk');
  })
  .delete(() => {});

module.exports = phonesRouter;
