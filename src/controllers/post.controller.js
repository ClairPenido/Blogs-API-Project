const postService = require('../services/post.service');

const createPost = async (req, res, next) => {
  try {
    const { body, userId } = req;
    const { categoryIds } = req.body;
    const checkCategories = await postService.checkCategories(categoryIds);
    const newPost = await postService.createPost({ ...body, userId });
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
};