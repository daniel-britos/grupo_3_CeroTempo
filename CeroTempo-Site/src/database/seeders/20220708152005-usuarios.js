'use strict';
const users_db = require('../../data/userDataBase.json');
const users = users_db.map(user => {
  return {
    userName : user.userName,
    userSurname : user.userName,
    userEmail : user.userEmail,
    userBirth : user.userBirth,
    rol : user.rol,
    userPass : user.userPass,
    avatar : user.avatar,
    createdAt : new Date(),
    updatedAt : new Date(),
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('users', users, {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('users', null, {});
     
  }
};
