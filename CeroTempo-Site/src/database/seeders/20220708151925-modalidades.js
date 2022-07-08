'use strict';
const modalities_db = ['remote','face to face']
const modalities = modalities_db.map(modality => {
  return {
    name : modality,
    createdAt : new Date(),
    updatedAt : new Date()
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('modalities', modalities, {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('modalities', null, {});
     
  }
};
