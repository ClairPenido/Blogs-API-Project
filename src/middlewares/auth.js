const jwt = require('jsonwebtoken');
const errorGenerate = require('../utils/genericError');

const { JWT_SECRET } = process.env;

const authValidation = (req, res, next) => {
  const token = req.headers.authorization;
console.log('token:', token);
  if (!token) { // se não existir o token
    const err = errorGenerate(401, 'Token not found');
    return next(err);
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET); // verifica se o token é valido

    req.user = payload;
    console.log('req', req.user);
    return next();
  } catch (err) {
    err.message = 'Expired or invalid token';
    err.status = 401;
    return next(err);
}
};
  
  module.exports = authValidation;