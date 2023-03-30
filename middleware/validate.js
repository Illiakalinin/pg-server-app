const {
  USER_CREATION_VALIDATION_SCHEMA,
  USER_UPDATING_VALIDATION_SCHEMA,
} = require('../utils/validationSchemas');

module.exports.validateUsersOnCreate = async (req, res, next) => {
  const { body } = req;

  try {
    const validatedUser = await USER_CREATION_VALIDATION_SCHEMA.validate(body);

    next();
  } catch (err) {
    next(err);
  }
};

module.exports.validateUsersOnUpdate = async (req, res, next) => {
  const { body } = req;

  try {
    const updatedValidatedUser = await USER_UPDATING_VALIDATION_SCHEMA.validate(
      body
    );
    req.body = updatedValidatedUser;
    next();
  } catch (err) {
    next(err);
  }
};
