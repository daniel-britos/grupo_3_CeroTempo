'use strict';
const categories_db = require('../../data/categoriesDataBase.json');
const categories = categories_db.map(category => {
  return {
    name : category,
    createdAt : new Date(),
    updatedAt : new Date()
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('categories', categories, {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('categories', null, {});
     
  }
};
