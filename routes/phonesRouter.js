const { Router } = require('express');

// /api/phones
const phonesRouter = Router();

phonesRouter.get('/', (req, res) => {
  res.send('ok1');
});

module.exports = phonesRouter;
