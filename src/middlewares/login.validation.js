const { loginSchema } = require('../utils/schemas');

const loginValidate = (req, res, next) => {
  const login = req.body;
  const { error } = loginSchema.validate(login);

  if (error) {
    return res.status(400)
    .json({ message: 'Some required fields are missing', type: 'Invalid Entity' });
  }
  next();
};

module.exports = loginValidate;