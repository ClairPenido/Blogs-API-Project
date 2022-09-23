'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {

    await queryInterface.createTable('users', { 
      id: { 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      }, 
      display_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
     });
     
  },

  down: async (queryInterface) => {

   await queryInterface.dropTable('users');
     
  }
};
