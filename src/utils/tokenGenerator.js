const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const generateToken = (payload) => jwt.sign(payload, JWT_SECRET, jwtConfig);

module.exports = {
  generateToken,
};