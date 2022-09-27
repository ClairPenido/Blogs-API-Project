module.exports = (sequelize, DataTypes) => {

  const BlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    published: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updated: {
      allowNull: false,
      type: DataTypes.DATE,
    }
    },
    {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
});

  BlogPost.associate = (models) => { 
    BlogPost.belongsTo(models.User, { // N:1
      foreignKey:'user_id',
      as: 'userId'
    })

};

  return BlogPost;
};