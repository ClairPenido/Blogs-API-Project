'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {

    await queryInterface.createTable('posts_categories', {
      post_id: { // FK + PK
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      category_id: { // FK + PK
        type: DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface) => {
  
    await queryInterface.dropTable('posts_categories');
    
  }
};
