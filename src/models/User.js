module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      displayName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
      }
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    });
    
    User.associate = (models) => { 
    User.hasMany(models.BlogPost, { // 1:N 
      foreignKey: 'user_id',
      as: 'userId',
    });
    };

  return User;
};
