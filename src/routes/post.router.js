const express = require('express');
const postController = require('../controllers/post.controller');
const authValidation = require('../middlewares/auth');

const router = express.Router();

router.post('/', authValidation, postController.createPost);

module.exports = router;