'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Starters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      weaponId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      spellOneId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      spellTwoId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      itemOneId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      itemTwoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Starters');
  }
};