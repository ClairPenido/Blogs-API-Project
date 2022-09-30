const { BlogPost, Category, PostCategory } = require('../models');
const errorGenerate = require('../utils/genericError');
// aqui que eu retorno o que eu gostaria que estivesse no retorno do thunder
const checkCategories = async (categories) => {
  const mapCategories = await Promise.all(categories.map((cat) => Category.findByPk(cat)));
  //  console.log('map', mapCategories);
  if (mapCategories.includes(null)) throw errorGenerate('400', '"categoryIds" not found');
};

const createPost = async (postInfo) => {
  const { title, content, userId, categoryIds } = postInfo;
  if (!title || !content) throw errorGenerate('400', 'Some required fields are missing');
  const dateReadme = new Date('2022-05-18T18:00:01.196Z');

  const newPost = await BlogPost
    .create({ title, content, userId, updated: dateReadme, published: dateReadme });
  console.log(newPost);
  const categories = categoryIds
    .map((cat) => ({ postId: newPost.dataValues.id, categoryId: cat }));
  // console.log(categories);
  await PostCategory.bulkCreate(categories);
  return newPost;
};

module.exports = {
  createPost,
  checkCategories,
};