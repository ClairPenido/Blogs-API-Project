const categoryService = require('../services/category.service');

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const newCategory = await categoryService.create({ name });
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

const catchAllCategories = async (req, res, next) => {
  try {
    const allCategories = await categoryService.getAllUsers();
    res.status(200).json(allCategories);
  } catch (error) {
    next(error);
  }
 };

module.exports = {
  createCategory,
  catchAllCategories,
};