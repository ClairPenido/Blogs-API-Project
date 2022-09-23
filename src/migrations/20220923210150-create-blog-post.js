'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {

    await queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      user_id: { // FK
        allowNull: false,
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          // tabela de referência da associação
          model: 'users',
          // coluna de referência que é a chave correspondente
          key: 'id',
        }
      },
      published: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });

  },

  down: async (queryInterface) => {
  
    await queryInterface.dropTable('blog_posts');
    
  }
};
