const { BlogPost, Category } = require('../models');
const errorGenerate = require('../utils/genericError');
// aqui que eu retorno o que eu gostaria que estivesse no retorno do thunder
const checkCategories = async (categories) => {
 const mapCategories = await Promise.all(categories.map((cat) => Category.findByPK(cat)));
  if (mapCategories === null) return false;
  console.log(mapCategories);
  return mapCategories;
};

const createPost = async (postInfo) => {
    const { title, content, userId, categoryIds } = postInfo;

    const dateReadme = new Date('2022-05-18T18:00:01.196Z');
     
    const newPost = await BlogPost
    .create({ title, content, userId, updated: dateReadme, published: dateReadme });

    return newPost; 
  };

  module.exports = {
    createPost,
    checkCategories,
  };