const postService = require('../services/post.service');
const { verifyToken } = require('../utils/tokenGenerator');

const createPost = async (req, res, next) => {
  try {
    const { categoryIds } = req.body;
    const returnUser = await verifyToken(req.headers.authorization);
    await postService.checkCategories(categoryIds);
    const newPost = await postService.createPost({ ...req.body, userId: returnUser.id });
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
};