'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.Image, {
        as: 'images',
        foreignKey: 'productId'
      })
    }
  }
  Product.init({
    name: DataTypes.STRING(25),
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    // characteristics: DataTypes.STRING,
    //productId: DataTypes.INTEGER.UNSIGNED,
    categoryId: DataTypes.INTEGER.UNSIGNED,
    brandId: DataTypes.INTEGER.UNSIGNED
  }, {
    sequelize,
    modelName: 'Product',
    paranoid: true
  });
  return Product;
};