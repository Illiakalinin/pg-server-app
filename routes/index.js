const { Router } = require('express');
const phonesRouter = require('./phonesRouter');
const usersRouter = require('./usersRouter');

const router = Router();

// /api/users
router.use('/users', usersRouter);

// /api/phones
router.use('/phones', phonesRouter);

//endpoints
// get /users?page=1&results=5 - admin
// get /users/1                - admin
// post /users                 - user
// patch /users/1              - user
// delete /users/1              - user
// get /users/1/phones?page=1&results=5 - user

// get /phones?page=1&results=5 - user
// ... admin

module.exports = router;
