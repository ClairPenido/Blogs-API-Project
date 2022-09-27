const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const authValidation = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) { // se não existir o token
    const err = new Error('Token not found');
    err.statusCode = 401;
    return next(err);
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET); // verifica se o token é valido

    req.user = payload;
    return next();
  } catch (err) {
    err.statusText = 'Expired or invalid token';
    err.statusCode = 401;
    return next(err);
}
};
  
  module.exports = authValidation;