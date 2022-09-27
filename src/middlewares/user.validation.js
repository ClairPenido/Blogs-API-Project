const { userSchema } = require('../utils/schemas');

const userValidate = (req, res, next) => {
  const user = req.body;
  const { error } = userSchema.validate(user);

  if (error) {
    return res.status(400).json({ message: error.message, type: 'Invalid Entity' });
  }
  next();
};

module.exports = userValidate;