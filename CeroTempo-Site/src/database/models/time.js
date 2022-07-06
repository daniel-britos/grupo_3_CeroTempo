'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Time.hasMany(models.Course, {
        as: 'times',
        foreignKey: 'timeId'
      })
    }
  }
  Time.init({
    name: DataTypes.STRING(25)
  }, {
    sequelize,
    modelName: 'Time',
  });
  return Time;
};