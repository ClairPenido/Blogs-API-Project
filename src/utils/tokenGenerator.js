const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '12h',
  algorithm: 'HS256',
};

const generateToken = (payload) => jwt.sign(payload, JWT_SECRET, jwtConfig);

const verifyToken = (token) => jwt.verify(token, JWT_SECRET);

module.exports = {
  generateToken,
  verifyToken,
};