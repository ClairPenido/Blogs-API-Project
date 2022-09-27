const { User } = require('../models');
const errorGenerate = require('../utils/genericError');
const auth = require('../utils/tokenGenerator');

const create = async (userInfo) => {
  const { displayName, email, password, image } = userInfo;
  const emailCheck = await User.findOne({ where: { email } }); // email: userInfo.email
  if (emailCheck) {
    throw errorGenerate(409, 'User already registered', 'Bad request');
  }
  const newUser = await User.create({ displayName, email, password, image });
  delete newUser.dataValues.password;
  // console.log(newUser.dataValues);
  return auth.generateToken(newUser.dataValues); // aqui que eu retorno o que eu gostaria que estivesse no retorno do thunder
};

const getAllUsers = async () => {
  const allUsers = await User.findAll(); 
  return allUsers;
};

const getUserbyId = async (id) => {
  const userbyId = await User.findOne({ where: { id } });
  if (!userbyId) {
    throw errorGenerate(404, 'User does not exist', 'User does not exist');
  }
  return userbyId;
};

module.exports = {
  create,
  getAllUsers,
  getUserbyId,
};