const { User } = require('../models');

module.exports.createUser = async (req, res, next) => {
  const { body } = req;

  try {
    const createdUser = await User.create(body);
    res.status(201).send(createdUser);
  } catch (error) {
    next(e);
  }
};

module.exports.deleteUser = async () => {};
