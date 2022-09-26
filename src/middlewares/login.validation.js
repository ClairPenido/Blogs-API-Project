const { loginSchema } = require('../utils/schemas');

const loginValidate = (req, res, next) => {
  const login = req.body;
  const { error } = loginSchema.validate(login);

  if (error) {
    return res.status(418).json({ message: error.message, type: 'Invalid Entity' });
  }
  next();
};

module.exports = loginValidate;