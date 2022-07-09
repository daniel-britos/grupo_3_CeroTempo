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
    characteristics: DataTypes.STRING,
<<<<<<< HEAD
    // productId: DataTypes.INTEGER.UNSIGNED,
=======
>>>>>>> 4855c7e1a6af17dbd047c527c597cd1e5de37a34
    categoryId: DataTypes.INTEGER.UNSIGNED,
    brandId: DataTypes.INTEGER.UNSIGNED
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};