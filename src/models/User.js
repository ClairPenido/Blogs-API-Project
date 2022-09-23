module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      display_name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.STRING,
      }
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    });

  return User;
};
