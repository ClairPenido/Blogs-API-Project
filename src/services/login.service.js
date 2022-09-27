const { User } = require('../models');
const errorGenerate = require('../utils/genericError');
const auth = require('../middlewares/auth');

const enterLogin = async (loginInfo) => {
  const { email, password } = loginInfo;
  const emailCheck = await User.findOne({
     attributes: { exclude: ['password'] }, where: { email, password } }); // email: loginInfo.email
  console.log(emailCheck);
  if (!emailCheck) {
    throw errorGenerate(400, 'Invalid fields', 'Invalid field');
  }
  delete emailCheck.dataValues.password;
  // aqui que eu retorno o que eu gostaria que estivesse no retorno do thunder
  console.log(emailCheck.dataValues);
  return auth.generateToken(emailCheck.dataValues);
};

module.exports = {
  enterLogin,
};