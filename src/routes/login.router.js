const express = require('express');
const loginValidate = require('../middlewares/login.validation');
const loginController = require('../controllers/login.controller');

const router = express.Router();

router.post('/', loginValidate, loginController.newLogin);

module.exports = router;