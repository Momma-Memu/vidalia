'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Races', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      acMod: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      hpMod: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      strMod: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dexMod: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      constMod: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      intelMod: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      wisdMod: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      charMod: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Races');
  }
};