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
    userName: DataTypes.STRING(25),
    userSurname: DataTypes.STRING(25),
    userEmail: DataTypes.STRING(45),
    userBirth: DataTypes.DATE,
    rol: DataTypes.STRING(25),
    userPass: DataTypes.STRING,
    avatar: DataTypes.STRING(45)
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};