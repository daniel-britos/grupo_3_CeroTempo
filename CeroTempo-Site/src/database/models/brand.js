'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Brand.hasMany(models.Product, {
        as: 'brands',
        foreignKey: 'brandId'
      })
    }
  }
  Brand.init({
    name: DataTypes.STRING(25)
  }, {
    sequelize,
    modelName: 'Brand',
  });
  return Brand;
};