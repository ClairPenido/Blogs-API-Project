const loginService = require('../services/login.service');

const newLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await loginService.enterLogin({ email, password });
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  newLogin,
};