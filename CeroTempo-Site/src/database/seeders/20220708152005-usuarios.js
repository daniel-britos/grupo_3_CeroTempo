'use strict';
const users_db = require('../../data/userDataBase.json');
const users = users_db.map(user => {
  return {
    user_name : user.userName,
    user_surname : user.userName,
    user_email : user.userEmail,
    user_birthday : user.userBirth,
    role : user.rol,
    password : user.userPass,
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
