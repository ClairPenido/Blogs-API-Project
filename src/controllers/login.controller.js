const loginService = require('../services/login.service');

const newLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await loginService.create({ email, password });
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  newLogin,
};