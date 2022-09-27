const { User } = require('../models');
const errorGenerate = require('../utils/genericError');
const auth = require('../middlewares/auth');

const findLogin = async (loginInfo) => {
  const { email, password } = loginInfo;
  const emailCheck = await User.findOne({ where: { email, password } }); // email: loginInfo.email
  console.log(emailCheck);
  // if (emailCheck.length === 0) {
  //   throw errorGenerate(400, 'Some required fields are missing', 'Empty inputs');
  // }
  if (!emailCheck) {
    throw errorGenerate(400, 'Invalid fields', 'Invalid field');
  }
  // aqui que eu retorno o que eu gostaria que estivesse no retorno do thunder
  console.log(emailCheck);
  return auth.generateToken(emailCheck);
};

module.exports = {
  findLogin,
};