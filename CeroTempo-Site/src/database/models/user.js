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
    userName: DataTypes.STRING(50),
    userSurname: DataTypes.STRING(50),
    userEmail: DataTypes.STRING(50),
    userBirth: DataTypes.DATEONLY, //se cambio para que solo mande la fecha
    rol: DataTypes.STRING(25),
    userPass: DataTypes.STRING(100),
    avatar: DataTypes.STRING(50)
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};