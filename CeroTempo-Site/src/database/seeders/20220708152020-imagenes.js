'use strict';
const products_db = require('../../data/productsDataBase.json');
let images = [];

products_db.forEach(product => {
  product.img.forEach(image => {
    images.push({
      name : image,
      productId : product.id,
      createdAt : new Date(),
      updatedAt : new Date(),
    })
  })
});

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('images', images, {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('images', null, {});
     
  }
};
