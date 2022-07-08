'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    user_name: DataTypes.STRING(25),
    user_surname: DataTypes.STRING(25),
    user_email: DataTypes.STRING(45),
    user_birthay: DataTypes.DATE,
    role: DataTypes.STRING(25),
    password: DataTypes.STRING,
    avatar: DataTypes.STRING(45)
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};