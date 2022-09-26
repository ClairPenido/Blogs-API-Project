const express = require('express');
const userController = require('../controllers/user.controller');
const userValidate = require('../middlewares/user.validation');

const router = express.Router();

router.post('/', userValidate, userController.createUser);

module.exports = router;
