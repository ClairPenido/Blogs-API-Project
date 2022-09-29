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
    timestamps: false,
    tableName: 'post_categories',
    underscored: true,
  });

  PostCategory.associate = (models) => { 
    models.BlogPost.belongsToMany(models.Category, { // N:N
      foreignKey:'post_id',
      otherKey: 'category_id',
      through: PostCategory,
      as: 'categoryId'
    });

    models.Category.belongsToMany(models.BlogPost, { // N:N
      foreignKey:'category_id',
      otherKey: 'post_id',
      through: PostCategory,
      as: 'postId'
    });
  };

  return PostCategory;
};

