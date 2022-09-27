const { Category } = require('../models');
const errorGenerate = require('../utils/genericError');

const create = async (catInfo) => {
  const { name } = catInfo;
   if (!name) {
    throw errorGenerate(400, '"name" is required');
  }
  const newCategory = await Category.create({ name });
  return newCategory; // aqui que eu retorno o que eu gostaria que estivesse no retorno do thunder
};

const getAllUsers = async () => {
  const allUsers = await Category.findAll(); 
  return allUsers;
};

module.exports = {
  create,
  getAllUsers,
};