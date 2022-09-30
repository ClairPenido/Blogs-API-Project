module.exports = (sequelize, DataTypes) => {

  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'blog_posts',
        key: 'id',
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      },
    },
  },
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
    });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { // N:N
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategory,
      as: 'categoryId'
    });

    models.Category.belongsToMany(models.BlogPost, { // N:N
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategory,
      as: 'postId'
    });
  };

  return PostCategory;
};

