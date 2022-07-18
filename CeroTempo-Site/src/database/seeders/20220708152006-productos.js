'use strict';
const products_db = require('../../data/productsDataBase.json');
const products = products_db.map(product => {
  return {
    name : product.name,
    price : product.price,
    discount : product.discount,
    description : product.description,
    // characteristics : product.characteristics.toString(),
    categoryId : product.category,
    createdAt : new Date(),
    updatedAt : new Date(),
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('products', products, {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('products', null, {});
     
  }
};
