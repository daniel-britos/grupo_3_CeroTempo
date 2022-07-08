'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      discount: {
        allowNull: true,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      characteristics: {
        allowNull: true,
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: {tableName: 'categories'},
          key: 'id'  
        }
      },
      brandId: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: {tableName: 'brands'},
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
    await queryInterface.dropTable('Products');
  }
};