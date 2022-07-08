'use strict';
const times_db = ['morning', 'afternoon', 'night'];
const times = times_db.map(time => {
  return {
    name : time,
    createdAt : new Date(),
    updatedAt : new Date()
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('times', times, {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('times', null, {});
     
  }
};
