const userService = require('../services/user.service');

const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await userService.create({ displayName, email, password, image });
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
};