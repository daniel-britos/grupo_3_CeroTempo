'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      userName: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      userSurname: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      userEmail: {
        allowNull: false,
        type: Sequelize.STRING(45),
        unique: true
      },
      userBirth: {
        allowNull: false,
        type: Sequelize.DATE
      },
      rol: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      userPass: {
        allowNull: false,
        type: Sequelize.STRING
      },
      avatar: {
        allowNull: true,
        type: Sequelize.STRING(45)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};