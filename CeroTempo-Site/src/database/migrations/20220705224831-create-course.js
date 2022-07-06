'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      profesor: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      modeId: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: {tableName: 'modalities'},
          key: 'id'  
        }
      },
      timeId: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: {tableName: 'times'},
          key: 'id'  
        }
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
    await queryInterface.dropTable('Courses');
  }
};