'use strict';
const brands_db = require('../../data/brandsDataBase.json');
const brands = brands_db.map(brand => {
  return {
    name : brand,
    createdAt : new Date(),
    updatedAt : new Date()
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('brands', brands, {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('brands', null, {});
     
  }
};
