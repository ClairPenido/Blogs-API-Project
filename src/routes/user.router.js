const express = require('express');
const userController = require('../controllers/user.controller');
const authValidation = require('../middlewares/auth');
const userValidate = require('../middlewares/user.validation');

const router = express.Router();

router.post('/', userValidate, userController.createUser);
router.get('/:id', authValidation, userController.catchUserbyId);
router.get('/', authValidation, userController.catchAllUsers);

module.exports = router;