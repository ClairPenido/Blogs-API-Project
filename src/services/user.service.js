const { User } = require('../models');
const errorGenerate = require('../utils/genericError');
const auth = require('../middlewares/auth');

const create = async (userInfo) => {
    const { displayName, email, password, image } = userInfo;
  const emailCheck = await User.findOne({ where: { email } }); // email: userInfo.email
  if (emailCheck) {
    throw errorGenerate(409, 'User already registered', 'Bad request');
  }
   const newUser = await User.create({ displayName, email, password, image });
  delete newUser.dataValues.password;
  // aqui que eu retorno o que eu gostaria que estivesse no retorno do thunder
  // console.log(newUser.dataValues);
  return auth.generateToken(newUser.dataValues);
};

module.exports = {
  create,
};