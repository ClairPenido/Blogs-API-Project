const express = require('express');
const categoryController = require('../controllers/category.controller');
const authValidation = require('../middlewares/auth');

const router = express.Router();

router.post('/', authValidation, categoryController.createCategory);

module.exports = router;