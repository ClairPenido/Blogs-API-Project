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

const catchAllUsers = async (req, res, next) => {
  try {
    const allUsers = await userService.getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
 };

 const catchUserbyId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userbyId = await userService.getUserbyId(id);
    res.status(200).json(userbyId);
  } catch (error) {
    next(error);
  }
 };

module.exports = {
  createUser,
  catchAllUsers,
  catchUserbyId,
};